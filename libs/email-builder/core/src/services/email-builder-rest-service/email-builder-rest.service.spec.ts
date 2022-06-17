import { TestBed } from '@angular/core/testing';
import { AIPEmailBuilderRestService } from './email-builder-rest.service';

class TestAIPEmailBuilderRestService extends AIPEmailBuilderRestService {}

describe('AIPEmailBuilderRestService', () => {
  let service: TestAIPEmailBuilderRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestAIPEmailBuilderRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
