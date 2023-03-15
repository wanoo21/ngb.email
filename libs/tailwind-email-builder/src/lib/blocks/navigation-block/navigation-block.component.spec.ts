import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBlockComponent } from './navigation-block.component';

describe('NavigationBlockComponent', () => {
  let component: NavigationBlockComponent;
  let fixture: ComponentFixture<NavigationBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationBlockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
