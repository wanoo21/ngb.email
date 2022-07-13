import { TestBed } from '@angular/core/testing';
import { AIPEmailBuilderService } from './email-builder.service';

class TestAIPEmailBuilderServiceService extends AIPEmailBuilderService {}

describe('AIPEmailBuilderService', () => {
  let service: TestAIPEmailBuilderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestAIPEmailBuilderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
