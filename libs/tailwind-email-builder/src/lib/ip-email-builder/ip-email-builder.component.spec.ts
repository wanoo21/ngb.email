import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpEmailBuilderComponent } from './ip-email-builder.component';

describe('IpEmailBuilderComponent', () => {
  let component: IpEmailBuilderComponent;
  let fixture: ComponentFixture<IpEmailBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IpEmailBuilderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IpEmailBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
