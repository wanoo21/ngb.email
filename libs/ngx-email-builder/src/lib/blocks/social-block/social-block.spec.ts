import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialBlock } from './social.block';

describe('SocialBlockComponent', () => {
  let component: SocialBlock;
  let fixture: ComponentFixture<SocialBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialBlock],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
