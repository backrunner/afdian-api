import fetch from 'node-fetch';
import api from './src/constants/api';
import { AfdianRequestParams } from './src/types/request';
import { buildRequestBody, signRequest } from './src/utils/request';

class AfdianApi {
  private userId: string;
  private token: string;
  constructor(opts: AfdianApiOpts) {
    const { userId, token } = opts;
    this.userId = userId;
    this.token = token;
  }
  private async send(url: string, params?: AfdianRequestParams) {
    let body = null;
    if (params) {
      const signed = signRequest(this.token, buildRequestBody(this.userId, params));
      body = {
        body: JSON.stringify(signed),
      };
    }
    return await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      ...body,
    });
  }
  async ping() {
    const res = await this.send(api.ping);
    return await res.json();
  }
  async queryOrder(page: number) {
    const res = await this.send(api.queryOrder, { page });
    return await res.json();
  }
  async querySponsor(page: number) {
    const res = await this.send(api.querySponsor, { page });
    return await res.json();
  }
}

export default AfdianApi;
