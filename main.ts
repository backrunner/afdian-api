import fetch from 'node-fetch';
import api from './src/constants/api';
import { AfdianApiOpts } from './src/types/common';
import {
  AfdianPingResponse,
  AfdianOrderResponse,
  AfdianSponsorResponse,
  AfdianRequestParams,
} from './src/types/request';
import { buildRequest, signRequest } from './src/utils/request';

class AfdianApi {
  private userId: string;
  private token: string;
  public constructor(opts: AfdianApiOpts) {
    const { userId, token } = opts;
    if (!userId) {
      throw new TypeError('User ID should not be empty.');
    }
    if (!token) {
      throw new TypeError('Token should not be empty.');
    }
    this.userId = userId;
    this.token = token;
  }
  public async ping(): Promise<AfdianPingResponse> {
    const res = await this.send(api.ping);
    return await res.json();
  }
  public async queryOrder(page: number): Promise<AfdianOrderResponse> {
    const res = await this.send(api.queryOrder, { page });
    return await res.json();
  }
  public async querySponsor(page: number): Promise<AfdianSponsorResponse> {
    const res = await this.send(api.querySponsor, { page });
    return await res.json();
  }
  private async send(url: string, params?: AfdianRequestParams) {
    const signed = signRequest(this.token, buildRequest(this.userId, params));
    return await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signed),
    });
  }
}

export default AfdianApi;
