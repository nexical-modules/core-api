// INITIAL GENERATED CODE - REVIEW AND MODIFY AS NEEDED FOR SERVICE INTEGRATION TESTS
import { describe, it, expect } from 'vitest';
import { SchemaRootAction } from '../../../src/actions/schema-root';
import { createMockContext } from '../../../../../tests/integration/helpers/context';

describe('SchemaRootAction - Service Integration', () => {
  it('should return the schema successfully', async () => {
    const ctx = await createMockContext();
    const result = await SchemaRootAction.run(undefined, ctx);

    expect(result.success).toBe(true);
    expect(result.data).toBeDefined();
  });
});
