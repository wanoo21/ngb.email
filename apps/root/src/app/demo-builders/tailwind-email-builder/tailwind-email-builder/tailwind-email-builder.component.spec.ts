import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailwindEmailBuilderComponent } from './tailwind-email-builder.component';

describe('TailwindEmailBuilderComponent', () => {
  let component: TailwindEmailBuilderComponent;
  let fixture: ComponentFixture<TailwindEmailBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TailwindEmailBuilderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TailwindEmailBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
