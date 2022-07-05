import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacerBlock } from './spacer.block';

describe('SpacerBlockComponent', () => {
  let component: SpacerBlock;
  let fixture: ComponentFixture<SpacerBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpacerBlock],
    }).compileComponents();

    fixture = TestBed.createComponent(SpacerBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
