import { expect } from 'chai';
import dotEnv from 'dotenv';
import Afdian from '../main';

dotEnv.config();

const afdian = new Afdian({
  userId: process.env.AFDIAN_USER_ID || '',
  token: process.env.AFDIAN_TOKEN || '',
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
