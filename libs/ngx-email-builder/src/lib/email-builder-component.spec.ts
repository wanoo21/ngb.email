import { AIPEmailBuilderComponent } from './email-builder-component';

class TestIPEmailBuilderComponent extends AIPEmailBuilderComponent {}

describe('IPEmailBuilderComponent', () => {
  it('should create an instance', () => {
    expect(new TestIPEmailBuilderComponent()).toBeTruthy();
  });
});
