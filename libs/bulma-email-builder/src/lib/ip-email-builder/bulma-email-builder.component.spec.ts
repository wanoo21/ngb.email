import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BulmaEmailBuilderComponent } from './bulma-email-builder.component';

describe('IpEmailBuilderComponent', () => {
  let component: BulmaEmailBuilderComponent;
  let fixture: ComponentFixture<BulmaEmailBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BulmaEmailBuilderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BulmaEmailBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
