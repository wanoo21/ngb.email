import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidthHeightComponent } from './width-height.component';

describe('WidthHeightComponent', () => {
  let component: WidthHeightComponent;
  let fixture: ComponentFixture<WidthHeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidthHeightComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WidthHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
