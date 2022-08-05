import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdStructureComponent } from './md-structure.component';

describe('SectionComponent', () => {
  let component: MdStructureComponent;
  let fixture: ComponentFixture<MdStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MdStructureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MdStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
