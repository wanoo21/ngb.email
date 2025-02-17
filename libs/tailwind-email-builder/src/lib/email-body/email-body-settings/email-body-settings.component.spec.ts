import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmailBodySettingsComponent } from './email-body-settings.component';

describe('EmailBodySettingsComponent', () => {
  let component: EmailBodySettingsComponent;
  let fixture: ComponentFixture<EmailBodySettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmailBodySettingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmailBodySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
