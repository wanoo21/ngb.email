import { TestBed } from '@angular/core/testing';

import { IpEmailBuilderInterceptor } from './ip-email-builder.interceptor';

describe('IpEmailBuilderInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      IpEmailBuilderInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: IpEmailBuilderInterceptor = TestBed.inject(IpEmailBuilderInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
