import { ModuleDiscovery } from '@/lib/modules/module-discovery';
import { config } from '@/lib/core/config';
import { generateDocs, type ApiActor } from '@/lib/api/api-docs';

export class CoreApiDocService {
  /**
   * Generates the complete OpenAPI specification for the entire backend.
   */
  public static async getFullSchema(actor?: ApiActor) {
    const modules = await ModuleDiscovery.loadModules();

    const openApiDoc: Record<string, unknown> = {
      openapi: '3.0.0',
      info: {
        title: config.PUBLIC_SITE_NAME,
        version: config.PUBLIC_SITE_VERSION,
        description: config.PUBLIC_API_DESCRIPTION,
      },
      servers: [{ url: '/api' }],
      paths: {},
      components: {
        securitySchemes: {
          BearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
          CookieAuth: {
            type: 'apiKey',
            in: 'cookie',
            name: 'authjs.session-token',
          },
        },
      },
      security: [{ BearerAuth: [] }, { CookieAuth: [] }],
    };

    // 1. Generate Core API Docs
    const coreDocs = await generateDocs('core', actor);
    openApiDoc.paths = { ...(openApiDoc.paths as Record<string, unknown>), ...coreDocs };

    // 2. Generate Module API Docs
    for (const module of modules) {
      // Avoid circular or redundant docs if core-api itself is in modules
      // but usually we want to include its own /schema endpoint too.
      const moduleDocs = await generateDocs(module, actor);
      openApiDoc.paths = { ...(openApiDoc.paths as Record<string, unknown>), ...moduleDocs };
    }

    return openApiDoc;
  }
}
