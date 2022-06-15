import { async, TestBed } from '@angular/core/testing';
import { IpEmailBuilderModule } from './i-p-email-builder.module';

describe('EmailBuilderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IpEmailBuilderModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(IpEmailBuilderModule).toBeDefined();
  });
});
