import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DividerSettingsComponent } from './divider-settings.component';

describe('DividerSettingsComponent', () => {
  let component: DividerSettingsComponent;
  let fixture: ComponentFixture<DividerSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DividerSettingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DividerSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
