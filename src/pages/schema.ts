// GENERATED CODE - DO NOT MODIFY
import { defineApi } from '@/lib/api/api-docs';
import { ApiGuard } from '@/lib/api/api-guard';
import { HookSystem } from '@/lib/modules/hooks';
import { SchemaCoreDocAction } from '../actions/schema-core-doc';

export const GET = defineApi(
  async (context, actor) => {
    // 1. Body Parsing (Input)
    const body = {} as CoreApiModuleTypes.none;

    const query = Object.fromEntries(new URL(context.request.url).searchParams);

    // 2. Hook: Filter Input
    const input: CoreApiModuleTypes.none = await HookSystem.filter('coreDoc.schema.input', body);

    // 3. Security Check
    const combinedInput = { ...context.params, ...query, ...input };
    await ApiGuard.protect(context, 'anonymous', combinedInput);

    // Inject userId from context for protected routes
    if (actor && actor.id) {
      Object.assign(combinedInput, { userId: actor.id });
    }

    // 4. Action Execution
    const result = await SchemaCoreDocAction.run(combinedInput, context);

    // 5. Hook: Filter Output
    const filteredResult = await HookSystem.filter('coreDoc.schema.output', result);

    // 6. Response
    if (!filteredResult.success) {
      return new Response(JSON.stringify({ error: filteredResult.error }), {
        status: 400,
      });
    }

    // Scalar needs the raw OpenAPI JSON, not wrapped in { success, data }
    return new Response(JSON.stringify(filteredResult.data, null, 2), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  {
    summary: 'Returns the aggregated OpenAPI schema.',
    tags: ['CoreDoc'],

    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: { type: 'object' },
          },
        },
      },
    },
    protected: false,
  },
);
