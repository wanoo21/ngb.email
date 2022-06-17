import { TestBed } from '@angular/core/testing';

import { BuilderServiceService } from './builder-service.service';

describe('BuilderServiceService', () => {
  let service: BuilderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuilderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
