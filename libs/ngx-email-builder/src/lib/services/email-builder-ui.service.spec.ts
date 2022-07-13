import { TestBed } from '@angular/core/testing';

import { IPEmailBuilderUiService } from './email-builder-ui.service';

describe('IPEmailBuilderUiService', () => {
  let service: IPEmailBuilderUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IPEmailBuilderUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
