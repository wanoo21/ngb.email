import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPEmailBuilderBlockComponent } from './ipemail-builder-block.component';

describe('IPEmailBuilderBlockComponent', () => {
  let component: IPEmailBuilderBlockComponent;
  let fixture: ComponentFixture<IPEmailBuilderBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IPEmailBuilderBlockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IPEmailBuilderBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
