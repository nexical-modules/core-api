import { describe, it, expect, vi, beforeEach } from 'vitest';
import { GET } from '../../../src/pages/schema';
import { ModuleDiscovery, type LoadedModule } from '@/lib/modules/module-discovery';
import { generateDocs } from '@/lib/api/api-docs';
import type { APIContext } from 'astro';

// Mock auth config (used by defineApi/api-docs)
vi.mock('auth:config', () => ({
  default: {
    providers: [],
  },
}));

// Mock ApiGuard (used by the endpoint)
vi.mock('@/lib/api/api-guard', () => ({
  ApiGuard: {
    protect: vi.fn(),
  },
}));

// Mock dependencies
vi.mock('@/lib/modules/module-discovery', () => ({
  ModuleDiscovery: {
    loadModules: vi.fn(),
  },
}));

vi.mock('@/lib/api/api-docs', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/lib/api/api-docs')>();
  return {
    ...actual,
    generateDocs: vi.fn(),
  };
});

vi.mock('@/lib/core/config', () => ({
  config: {
    PUBLIC_SITE_NAME: 'Test Site',
    PUBLIC_SITE_VERSION: '1.0.0',
    PUBLIC_API_DESCRIPTION: 'Test API',
  },
}));

describe('API Schema Endpoint', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('generates openapi schema correctly', async () => {
    // Setup mocks
    const mockModules = [
      { name: 'mod1', path: '/modules/mod1', config: { type: 'feature' } },
      { name: 'mod2', path: '/modules/mod2', config: { type: 'feature' } },
    ] as LoadedModule[];

    vi.mocked(ModuleDiscovery.loadModules).mockResolvedValue(mockModules);

    vi.mocked(generateDocs).mockImplementation(async (module: LoadedModule | 'core') => {
      const moduleName = module === 'core' ? 'core' : module.name;
      if (moduleName === 'core') return { '/core-path': { get: {} } };
      if (moduleName === 'mod1') return { '/path1': { get: {} } };
      if (moduleName === 'mod2') return { '/path2': { post: {} } };
      return {};
    });

    const mockContext = {
      locals: {
        actor: { id: 'user1' },
      },
      request: {
        url: 'http://localhost/api/schema',
      },
      params: {},
    } as unknown as APIContext;

    const response = await GET(mockContext);

    expect(response).toBeInstanceOf(Response);
    expect(response.headers.get('Content-Type')).toBe('application/json');

    const data = await response.json();

    // Check basic info
    expect(data.openapi).toBe('3.0.0');
    expect(data.info.title).toBe('Test Site');
    expect(data.info.version).toBe('1.0.0');

    // Check paths merging (Core + Mod1 + Mod2)
    expect(data.paths).toEqual({
      '/core-path': { get: {} },
      '/path1': { get: {} },
      '/path2': { post: {} },
    });

    // Verify calls
    expect(ModuleDiscovery.loadModules).toHaveBeenCalled();
    expect(generateDocs).toHaveBeenCalledTimes(3); // 1 for core + 2 for modules
  });
});
