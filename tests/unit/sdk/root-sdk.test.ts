// GENERATED CODE - DO NOT MODIFY
describe('RootSDK', () => {
  let sdk: RootSDK;
  let mockClient: { request: vi.Mock };

  beforeEach(() => {
    vi.clearAllMocks();
    mockClient = {
      request: vi.fn().mockResolvedValue({ success: true, data: { id: 'test-id' } }),
    };
    sdk = new RootSDK(mockClient as unknown as Record<string, unknown>);
  });

  it('should initialize', () => {
    expect(sdk).toBeDefined();
  });

  it('should call GET /schema on schema()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/schema'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).schema(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'schema';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on schema()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/schema'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).schema(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });
});

import { beforeEach, describe, expect, it, vi } from 'vitest';
import { RootSDK } from '../../../src/sdk/root-sdk';

describe('RootSDK', () => {
  let sdk: RootSDK;
  let mockClient: { request: vi.Mock };

  beforeEach(() => {
    vi.clearAllMocks();
    mockClient = {
      request: vi.fn().mockResolvedValue({ success: true, data: { id: 'test-id' } }),
    };
    sdk = new RootSDK(mockClient as unknown as Record<string, unknown>);
  });

  it('should initialize', () => {
    expect(sdk).toBeDefined();
  });

  it('should call GET /schema on schema()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/schema'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).schema(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'schema';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on schema()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/schema'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).schema(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });
});
