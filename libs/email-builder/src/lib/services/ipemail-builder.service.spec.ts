import { TestBed } from '@angular/core/testing';

import { IPEmailBuilderService } from './ipemail-builder.service';

describe('IPEmailBuilderServiceService', () => {
  let service: IPEmailBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IPEmailBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
