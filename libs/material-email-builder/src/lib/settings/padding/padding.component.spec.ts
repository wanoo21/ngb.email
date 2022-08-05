import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaddingComponent } from './padding.component';

describe('PaddingComponent', () => {
  let component: PaddingComponent;
  let fixture: ComponentFixture<PaddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaddingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
