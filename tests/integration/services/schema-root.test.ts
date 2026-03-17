import { createMockContext } from '@tests/integration/helpers/context';
import { describe, expect, it, beforeAll } from 'vitest';
import { SchemaRootAction } from '../../../src/actions/schema-root';
import { init } from '../../../src/server-init';

describe('SchemaRootAction - Service Integration', () => {
  beforeAll(async () => {
    await init();
  });

  it('should return the schema successfully', async () => {
    const ctx = await createMockContext('USER_ADMIN', 'user');
    const result = await SchemaRootAction.run(undefined, ctx);

    if (!result.success) {
      console.log('[DEBUG] SchemaRootAction error:', result.error);
    }

    expect(result.success).toBe(true);
    expect(result.data).toBeDefined();
    expect(typeof result.data).toBe('object');
  });
});
