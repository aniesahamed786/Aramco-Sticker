import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestReceivedPopupComponent } from './request-received-popup.component';

describe('RequestReceivedPopupComponent', () => {
  let component: RequestReceivedPopupComponent;
  let fixture: ComponentFixture<RequestReceivedPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestReceivedPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestReceivedPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
