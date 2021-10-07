import { buildRequest, signRequest } from '../src/utils/request';
import { expect } from 'chai';

const USER_ID = '1e594220c90111ea88b551540055a377';

describe('Request utils', () => {
  before(function () {
    Date.now = () => 1624339905000;
  });
  it('Build request body', () => {
    expect(buildRequest(USER_ID, { page: 1 })).to.deep.equal({
      user_id: USER_ID,
      ts: Date.now() / 1000,
      params: JSON.stringify({ page: 1 }),
    });
  });
  it('Build request body without params', () => {
    expect(buildRequest(USER_ID)).to.deep.equal({
      user_id: USER_ID,
      ts: Date.now() / 1000,
      params: JSON.stringify({ empty: true }),
    });
  });
  it('Sign request', () => {
    expect(signRequest('123456', buildRequest(USER_ID, { page: 1 }))).to.deep.equal({
      user_id: USER_ID,
      ts: Date.now() / 1000,
      params: JSON.stringify({ page: 1 }),
      sign: '13836b92b27ac4acb1145bf91bba985a',
    });
  });
});
