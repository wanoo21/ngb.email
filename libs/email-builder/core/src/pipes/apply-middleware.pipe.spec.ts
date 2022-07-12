import { ApplyMiddlewarePipe } from './apply-middleware.pipe';

describe('ApplyMiddlewarePipe', () => {
  it('create an instance', () => {
    const pipe = new ApplyMiddlewarePipe();
    expect(pipe).toBeTruthy();
  });
});
