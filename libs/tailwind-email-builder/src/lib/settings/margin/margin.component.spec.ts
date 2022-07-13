import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarginComponent } from './margin.component';

describe('MarginComponent', () => {
  let component: MarginComponent;
  let fixture: ComponentFixture<MarginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MarginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
