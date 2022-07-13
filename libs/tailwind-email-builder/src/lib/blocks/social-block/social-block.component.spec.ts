import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialBlockComponent } from './social-block.component';

describe('SocialBlockComponent', () => {
  let component: SocialBlockComponent;
  let fixture: ComponentFixture<SocialBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialBlockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
