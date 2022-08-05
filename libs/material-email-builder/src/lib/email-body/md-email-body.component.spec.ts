import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdEmailBodyComponent } from './md-email-body.component';

describe('EmailBodyComponent', () => {
  let component: MdEmailBodyComponent;
  let fixture: ComponentFixture<MdEmailBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MdEmailBodyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MdEmailBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
