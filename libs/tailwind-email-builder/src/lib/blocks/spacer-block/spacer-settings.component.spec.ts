import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpacerSettingsComponent } from './spacer-settings.component';

describe('SpacerSettingsComponent', () => {
  let component: SpacerSettingsComponent;
  let fixture: ComponentFixture<SpacerSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpacerSettingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpacerSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
