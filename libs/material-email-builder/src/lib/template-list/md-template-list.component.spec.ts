import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdTemplateListComponent } from './md-template-list.component';

describe('TemplateListComponent', () => {
  let component: MdTemplateListComponent;
  let fixture: ComponentFixture<MdTemplateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MdTemplateListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MdTemplateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
