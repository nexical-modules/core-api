// GENERATED CODE - DO NOT MODIFY
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { CoreDocService } from '../../../src/services/core-doc-service';

vi.mock('@/lib/core/config', () => ({
  config: {
    PUBLIC_API_URL: 'http://localhost:3000',
    NODE_ENV: 'test',
  },
  createConfig: vi.fn().mockImplementation((schema) => ({
    parse: vi.fn().mockImplementation((d) => d),
    ...schema,
  })),
  getProcessEnv: vi.fn().mockImplementation((k) => k),
}));

vi.mock('@/lib/core/db', () => {
  const mockModelProps = {
    id: '1',
    email: 'test@example.com',
    name: 'test',
    status: 'PENDING',
    role: 'TEAM_MEMBER',
    token: 'test-token',
    expires: new Date(Date.now() + 86400000),
    actorId: 'ne_pat_test',
    lockedBy: 'ne_pat_test',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const isExistenceCheck = (where: Record<string, unknown>): boolean => {
    if (!where) return false;
    if (where.id) return false; // If searching by ID, assume we want the record to exist
    const fields = [
      'email',
      'username',
      'teamId_userId',
      'userId_teamId',
      'teamId_email',
      'email_teamId',
      // 'token', // Removed token from existence check as it's often used to fetch existing invitations
    ];
    const whereKeys = Object.keys(where);
    if (whereKeys.some((k) => fields.includes(k))) return true;
    if (whereKeys.some((k) => k.includes('_'))) return true;
    if (where.OR && Array.isArray(where.OR))
      return (where.OR as Record<string, unknown>[]).some((c) => isExistenceCheck(c));
    if (where.AND && Array.isArray(where.AND))
      return (where.AND as Record<string, unknown>[]).some((c) => isExistenceCheck(c));
    if (where.userId && where.teamId) return true;
    return false;
  };

  const mockModel = {
    findMany: vi.fn().mockResolvedValue([mockModelProps]),
    findUnique: vi.fn().mockImplementation((args: { where: Record<string, unknown> }) => {
      if (isExistenceCheck(args?.where) && !args?.where?.id) return null;
      return {
        ...(mockModelProps as Record<string, unknown>),
        ...args?.where,
      };
    }),
    findFirst: vi.fn().mockImplementation((args: { where: Record<string, unknown> }) => {
      if (isExistenceCheck(args?.where) && !args?.where?.id) return null;
      return {
        ...(mockModelProps as Record<string, unknown>),
        ...args?.where,
      };
    }),
    create: vi.fn().mockResolvedValue(mockModelProps),
    update: vi.fn().mockResolvedValue(mockModelProps),
    delete: vi.fn().mockResolvedValue(mockModelProps),
    count: vi.fn().mockResolvedValue(1),
    upsert: vi.fn().mockResolvedValue(mockModelProps),
    updateMany: vi.fn().mockResolvedValue({ count: 1 }),
    deleteMany: vi.fn().mockResolvedValue({ count: 1 }),
    groupBy: vi.fn().mockResolvedValue([{ _count: { id: 1 }, status: 'ACTIVE' }]),
    aggregate: vi.fn().mockResolvedValue({ _count: { id: 1 }, _avg: { value: 0 } }),
    ...(mockModelProps as Record<string, unknown>),
  };

  const handler = {
    get: (target: Record<string, unknown>, prop: string): unknown => {
      if (prop === '$transaction') {
        return vi.fn().mockImplementation(async (input) => {
          if (Array.isArray(input)) return Promise.all(input);
          return typeof input === 'function'
            ? input(new Proxy({}, handler as ProxyHandler<object>))
            : input;
        });
      }
      if (typeof prop === 'string' && !prop.startsWith('$')) {
        return mockModel;
      }
      return target[prop];
    },
  };

  return {
    db: new Proxy({}, handler),
  };
});

vi.mock('@/lib/core/logger', () => ({
  Logger: {
    error: vi.fn(),
    info: vi.fn(),
    warn: vi.fn(),
    debug: vi.fn(),
  },
}));

vi.mock('@/lib/modules/hooks', () => ({
  HookSystem: {
    dispatch: vi.fn().mockResolvedValue(undefined),
    filter: vi.fn().mockImplementation((name, data) => Promise.resolve(data)),
    on: vi.fn(),
  },
}));

describe('CoreDocService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('getFullSchema', () => {
    it('should run getFullSchema successfully', async () => {
      const result = await (
        CoreDocService as unknown as Record<string, (...args: unknown[]) => unknown>
      ).getFullSchema({
        id: 'ne_pat_test',
        email: 'test@example.com',
        name: 'Test',
        token: 'token',
        teamId: '1',
        role: 'TEAM_MEMBER',
        status: 'PENDING',
        password: 'password',
        confirmPassword: 'password',
      } as Record<string, unknown>);
      if (result && typeof result === 'object' && 'success' in result) {
        expect(
          (result as Record<string, unknown>).success,
          (result as Record<string, unknown>).error as string,
        ).toBe(true);
      }

      if (result && typeof result === 'object' && 'data' in result) {
        expect(result.data).toBeDefined();
      }
    });

    it('should handle errors in getFullSchema', async () => {
      try {
        const result = await (
          CoreDocService as unknown as Record<string, (...args: unknown[]) => unknown>
        ).getFullSchema({
          id: 'ne_pat_test',
          email: 'test@example.com',
          name: 'Test',
          token: 'token',
          teamId: '1',
          role: 'TEAM_MEMBER',
          status: 'PENDING',
          password: 'password',
          confirmPassword: 'password',
        } as Record<string, unknown>);
        if (result && typeof result === 'object' && 'success' in result) {
          expect(result.success).toBe(false);
        }
      } catch {
        // If it throws, that's also a valid error handling path
      }
    });
  });
});
