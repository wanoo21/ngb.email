import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V14InfoComponent } from './v14-info.component';

describe('V14InfoComponent', () => {
  let component: V14InfoComponent;
  let fixture: ComponentFixture<V14InfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [V14InfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(V14InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
