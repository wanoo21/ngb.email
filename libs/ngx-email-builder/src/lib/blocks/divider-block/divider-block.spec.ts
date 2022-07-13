import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerBlock } from './divider.block';

describe('DividerBlockComponent', () => {
  let component: DividerBlock;
  let fixture: ComponentFixture<DividerBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DividerBlock],
    }).compileComponents();

    fixture = TestBed.createComponent(DividerBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
