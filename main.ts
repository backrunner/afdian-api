import fetch from 'node-fetch';
import api from './src/constants/api';
import { AfdianApiOpts } from './src/types/common';
import { AfdianBasicResponse, AfdianOrderResponse, AfdianRequestParams, AfdianSponsorResponse } from './src/types/request';
import { buildRequest, signRequest } from './src/utils/request';

export * from './src/types'

class AfdianApi {
  private userId: string;
  private token: string;
  constructor(opts: AfdianApiOpts) {
    const { userId, token } = opts;
    this.userId = userId;
    this.token = token;
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
  async ping(): Promise<AfdianBasicResponse> {
    const res = await this.send(api.ping);
    return await res.json();
  }
  async queryOrder(page: number): Promise<AfdianOrderResponse> {
    const res = await this.send(api.queryOrder, { page });
    return await res.json();
  }
  async querySponsor(page: number): Promise<AfdianSponsorResponse> {
    const res = await this.send(api.querySponsor, { page });
    return await res.json();
  }
}

export default AfdianApi;
