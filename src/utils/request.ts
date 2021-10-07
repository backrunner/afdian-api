import { AfdianRequest, AfdianRequestParams, AfdianSignedRequest } from '../types/request';
import crypto from 'crypto';

const buildRequestBody = (userId: string, params: AfdianRequestParams): AfdianRequest => {
  return {
    user_id: userId,
    params: JSON.stringify(params),
    ts: Math.floor(Date.now() / 1000),
  };
};

const signRequest = (token: string, body: AfdianRequest): AfdianSignedRequest => {
  const toSign = `${token}params${body.params}ts${body.ts}user_id${body.user_id}`;
  const sign = crypto.createHash('md5').update(toSign).digest('hex');
  return {
    ...body,
    sign,
  };
};

export { buildRequestBody, signRequest };
