import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderComponent } from './border.component';

describe('BorderComponent', () => {
  let component: BorderComponent;
  let fixture: ComponentFixture<BorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BorderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
