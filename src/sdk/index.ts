import { BaseResource, ApiClient } from '@nexical/sdk-core';
import { CoreDocSDK as BaseCoreDocSDK } from './core-doc-sdk.js';

/** Main SDK for the core-api module. */
export class CoreModule extends BaseResource {
  public coreDoc: BaseCoreDocSDK;

  constructor(client: ApiClient) {
    super(client);
    this.coreDoc = new BaseCoreDocSDK(client);
  }
}

export * from './core-doc-sdk.js';
export * from './types.js';
