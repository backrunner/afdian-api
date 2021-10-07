import { AfdianRequest, AfdianRequestParams, AfdianSignedRequest } from '../types/request';
import * as crypto from 'crypto';

const buildRequest = (userId: string, params?: AfdianRequestParams): AfdianRequest => {
  const req = {
    user_id: userId,
    ts: Math.floor(Date.now() / 1000),
    params: JSON.stringify(params || { empty: true }),
  };
  return req;
};

const signRequest = (token: string, body: AfdianRequest): AfdianSignedRequest => {
  const toSign = `${token}params${body.params}ts${body.ts}user_id${body.user_id}`;
  const sign = crypto.createHash('md5').update(toSign).digest('hex');
  return {
    ...body,
    sign,
  };
};

export { buildRequest, signRequest };
