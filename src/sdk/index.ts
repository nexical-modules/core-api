// GENERATED CODE - DO NOT MODIFY
import { ApiClient, BaseResource } from '@nexical/sdk-core';
import { RootSDK as BaseRootSDK } from './root-sdk.js';
export * from './root-sdk.js';
export * from './types.js';

/** Main SDK for the core-api module. */
export class CoreModule extends BaseResource {
  public root: BaseRootSDK;
  public static readonly roles: Record<string, string> = {};

  constructor(client: ApiClient) {
    super(client);
    this.root = new BaseRootSDK(client);
  }
}
