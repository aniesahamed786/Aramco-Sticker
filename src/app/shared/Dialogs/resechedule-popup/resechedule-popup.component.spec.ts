import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResechedulePopupComponent } from './resechedule-popup.component';

describe('ResechedulePopupComponent', () => {
  let component: ResechedulePopupComponent;
  let fixture: ComponentFixture<ResechedulePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResechedulePopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResechedulePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
