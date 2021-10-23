import Afdian from '../main';
import keys from './keys';
import { expect } from 'chai';

const afdian = new Afdian({
  userId: keys.userId,
  token: keys.token,
});

describe('API request test', () => {
  it('ping', async () => {
    const res = await afdian.ping();
    expect(res.ec).to.equal(200);
  });
  it('queryOrder', async () => {
    const res = await afdian.queryOrder(1);
    expect(res.ec).to.equal(200);
  });
  it('querySponsor', async () => {
    const res = await afdian.querySponsor(1);
    expect(res.ec).to.equal(200);
  });
});
