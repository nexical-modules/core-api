// GENERATED CODE - DO NOT MODIFY
import { BaseResource, ApiClient } from '@nexical/sdk-core';
import { RootSDK as BaseRootSDK } from './root-sdk.js';

export * from './types.js';
export * from './root-sdk.js';

/** Main SDK for the core-api module. */
export class CoreModule extends BaseResource {
  public root: BaseRootSDK;

  constructor(client: ApiClient) {
    super(client);
    this.root = new BaseRootSDK(client);
  }
}
