import { ComponentFixture, TestBed } from '@angular/core/testing'
import { NavigationBlock } from "./navigation.block";

describe('NavigationBlockComponent', () => {
  let component: NavigationBlock;
  let fixture: ComponentFixture<NavigationBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationBlock],
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
