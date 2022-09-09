import { ToHistoryOptionsPipe } from './to-watch-options.pipe';

describe('ToWatchOptionsPipe', () => {
  it('create an instance', () => {
    const pipe = new ToHistoryOptionsPipe();
    expect(pipe).toBeTruthy();
  });
});
