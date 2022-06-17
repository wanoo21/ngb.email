import { TestBed } from '@angular/core/testing';

import { AIPEmailBuilderStorageService } from './email-builder-storage.service';

class TestEmailBuilderStorageService extends AIPEmailBuilderStorageService {}

describe('AIPEmailBuilderStorageService', () => {
  let service: AIPEmailBuilderStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestEmailBuilderStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
