import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengBuilderComponent } from './primeng-builder.component';

describe('PrimengBuilderComponent', () => {
  let component: PrimengBuilderComponent;
  let fixture: ComponentFixture<PrimengBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimengBuilderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrimengBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
