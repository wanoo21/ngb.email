import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacerBlockComponent } from './spacer-block.component';

describe('SpacerBlockComponent', () => {
  let component: SpacerBlockComponent;
  let fixture: ComponentFixture<SpacerBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpacerBlockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpacerBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
