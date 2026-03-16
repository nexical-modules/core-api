// GENERATED CODE - THE SIGNATURE IS MANAGED BY THE GENERATOR. YOU MAY MODIFY THE IMPLEMENTATION AND ADD CUSTOM IMPORTS.
import type { ServiceResponse } from '@/types/service';
import type { APIContext } from 'astro';
import { CoreDocService } from '../services/core-doc-service';

export class SchemaRootAction {
  public static async run(_input: void, context: APIContext): Promise<ServiceResponse<unknown>> {
    try {
      const schema = await CoreDocService.getFullSchema(context.locals.actor);
      if (schema && typeof schema === 'object' && 'success' in schema && schema.success === false) {
        return schema as unknown as ServiceResponse<unknown>;
      }
      return { success: true, data: schema };
    } catch (e) {
      return { success: false, error: (e as Error).message };
    }
  }
}
