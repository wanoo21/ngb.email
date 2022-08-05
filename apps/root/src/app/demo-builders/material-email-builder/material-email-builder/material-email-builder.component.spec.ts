import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialEmailBuilderComponent } from './material-email-builder.component';

describe('MaterialEmailBuilderComponent', () => {
  let component: MaterialEmailBuilderComponent;
  let fixture: ComponentFixture<MaterialEmailBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaterialEmailBuilderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaterialEmailBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
