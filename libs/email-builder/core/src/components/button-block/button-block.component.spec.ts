import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBlockComponent } from './button-block.component';

describe('ButtonBlockComponent', () => {
  let component: ButtonBlockComponent;
  let fixture: ComponentFixture<ButtonBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonBlockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
