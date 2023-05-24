import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplateListComponent } from './template-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TemplateListComponent', () => {
  let component: TemplateListComponent;
  let fixture: ComponentFixture<TemplateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TemplateListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
