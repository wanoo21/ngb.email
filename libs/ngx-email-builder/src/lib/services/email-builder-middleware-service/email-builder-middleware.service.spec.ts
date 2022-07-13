import { TestBed } from '@angular/core/testing';

import { AIPEmailBuilderMiddlewareService } from './email-builder-middleware.service';

class TestEmailBuilderMiddlewareService extends AIPEmailBuilderMiddlewareService {}

describe('AIPEmailBuilderMiddlewareService', () => {
  let service: AIPEmailBuilderMiddlewareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestEmailBuilderMiddlewareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
