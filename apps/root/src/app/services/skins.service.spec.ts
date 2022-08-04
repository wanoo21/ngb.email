import { TestBed } from '@angular/core/testing';

import { SkinsService } from './skins.service';

describe('SkinsService', () => {
  let service: SkinsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkinsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
