import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdEmailBuilderComponent } from './md-email-builder.component';

describe('IpEmailBuilderComponent', () => {
  let component: MdEmailBuilderComponent;
  let fixture: ComponentFixture<MdEmailBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MdEmailBuilderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MdEmailBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
