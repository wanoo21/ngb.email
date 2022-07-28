import { IpCanPipe } from './can.pipe';

describe('CanPipe', () => {
  it('create an instance', () => {
    const pipe = new IpCanPipe();
    expect(pipe).toBeTruthy();
  });
});
