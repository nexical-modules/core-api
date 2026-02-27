// GENERATED CODE - DO NOT MODIFY
import { BaseResource } from '@nexical/sdk-core';
/** SDK client for CoreDoc. */
export class CoreDocSDK extends BaseResource {
  public async schema(): Promise<{
    success: boolean;
    data: any;
    error?: string;
  }> {
    return this._request('GET', `/schema`);
  }
}
