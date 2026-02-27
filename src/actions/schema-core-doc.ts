import type { APIContext } from 'astro';
import type { ServiceResponse } from '@/types/service';
import { CoreApiDocService } from '../services/core-doc-service';

export class SchemaCoreDocAction {
  public static async run(_input: void, context: APIContext): Promise<ServiceResponse<unknown>> {
    const schema = await CoreApiDocService.getFullSchema(context.locals.actor);
    return { success: true, data: schema };
  }
}
