import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HtmlBlock} from "./html-block";


describe('IPEmailBuilderBlockComponent', () => {
  let component: HtmlBlock;
  let fixture: ComponentFixture<HtmlBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HtmlBlock],
    }).compileComponents();

    fixture = TestBed.createComponent(HtmlBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
