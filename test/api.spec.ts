import Afdian from '../main';
import keys from './keys';
import { expect } from 'chai';

const afdian = new Afdian({
  userId: keys.userId,
  token: keys.token,
});

describe('ping', () => {
  it('ping', async () => {
    const res = await afdian.ping();
    // console.log('ping res', res);
    expect(res.ec).to.equal(200);
  });
});

describe('queryOrder', () => {
  it('queryOrder', async () => {
    const res = await afdian.queryOrder(1);
    // console.log('queryOrder res', res);
    expect(res.ec).to.equal(200);
  });
});

describe('querySponsor', () => {
  it('querySponsor', async () => {
    const res = await afdian.querySponsor(1);
    // console.log('querySponsor res', res);
    expect(res.ec).to.equal(200);
  });
});
