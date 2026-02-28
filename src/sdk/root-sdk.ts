// GENERATED CODE - DO NOT MODIFY
import { BaseResource } from '@nexical/sdk-core';

/** SDK client for Root. */
export class RootSDK extends BaseResource {
  public async schema(): Promise<{ success: boolean; data: unknown; error?: string }> {
    return this._request('GET', `//schema`);
  }
}
