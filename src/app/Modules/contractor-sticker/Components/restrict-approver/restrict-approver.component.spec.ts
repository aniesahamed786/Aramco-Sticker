import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictApproverComponent } from './restrict-approver.component';

describe('RestrictApproverComponent', () => {
  let component: RestrictApproverComponent;
  let fixture: ComponentFixture<RestrictApproverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestrictApproverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestrictApproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
