import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewSelectedpopupComponent } from './renew-selectedpopup.component';

describe('RenewSelectedpopupComponent', () => {
  let component: RenewSelectedpopupComponent;
  let fixture: ComponentFixture<RenewSelectedpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenewSelectedpopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenewSelectedpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
