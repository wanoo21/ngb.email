import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StructureSettingsComponent } from './structure-settings.component';

describe('StructureSettingsComponent', () => {
  let component: StructureSettingsComponent;
  let fixture: ComponentFixture<StructureSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StructureSettingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StructureSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
