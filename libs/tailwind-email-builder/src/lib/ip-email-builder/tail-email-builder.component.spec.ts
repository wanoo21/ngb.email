import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailEmailBuilderComponent } from './tail-email-builder.component';

describe('IpEmailBuilderComponent', () => {
  let component: TailEmailBuilderComponent;
  let fixture: ComponentFixture<TailEmailBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TailEmailBuilderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TailEmailBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
