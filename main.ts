import fetch from 'node-fetch';
import api from './src/constants/api';
import { AfdianApiOpts } from './src/types/common';
import { AfdianRequestParams } from './src/types/request';
import { buildRequest, signRequest } from './src/utils/request';

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
