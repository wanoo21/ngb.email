import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerPageComponent } from './inner-page.component';

describe('InnerPageComponent', () => {
  let component: InnerPageComponent;
  let fixture: ComponentFixture<InnerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InnerPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
