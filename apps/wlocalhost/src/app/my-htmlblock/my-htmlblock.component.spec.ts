import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHTMLBlockComponent } from './my-htmlblock.component';

describe('MyHTMLBlockComponent', () => {
  let component: MyHTMLBlockComponent;
  let fixture: ComponentFixture<MyHTMLBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyHTMLBlockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyHTMLBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
