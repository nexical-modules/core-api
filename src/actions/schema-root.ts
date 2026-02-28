// GENERATED CODE - DO NOT MODIFY
import type { ServiceResponse } from '@/types/service';
import type { APIContext } from 'astro';

export class SchemaRootAction {
  public static async run(_input: void, context: APIContext): Promise<ServiceResponse<unknown>> {
    const schema = await CoreApiDocService.getFullSchema(context.locals.actor);
    return { success: true, data: schema };
  }
}
