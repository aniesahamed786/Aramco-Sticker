import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRestrictApproverComponent } from './add-restrict-approver.component';

describe('AddRestrictApproverComponent', () => {
  let component: AddRestrictApproverComponent;
  let fixture: ComponentFixture<AddRestrictApproverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRestrictApproverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRestrictApproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
