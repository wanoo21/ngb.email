import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailAsideComponent } from './email-aside.component';

describe('EmailAsideComponent', () => {
  let component: EmailAsideComponent;
  let fixture: ComponentFixture<EmailAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmailAsideComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmailAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
