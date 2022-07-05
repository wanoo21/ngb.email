import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBlock } from './text.block';

describe('IPEmailBuilderBlockComponent', () => {
  let component: TextBlock;
  let fixture: ComponentFixture<TextBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextBlock],
    }).compileComponents();

    fixture = TestBed.createComponent(TextBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
