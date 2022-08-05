import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdEmailAsideComponent } from './md-email-aside.component';

describe('EmailAsideComponent', () => {
  let component: MdEmailAsideComponent;
  let fixture: ComponentFixture<MdEmailAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MdEmailAsideComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MdEmailAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
