import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V9InfoComponent } from './v9-info.component';

describe('V9InfoComponent', () => {
  let component: V9InfoComponent;
  let fixture: ComponentFixture<V9InfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [V9InfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(V9InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
