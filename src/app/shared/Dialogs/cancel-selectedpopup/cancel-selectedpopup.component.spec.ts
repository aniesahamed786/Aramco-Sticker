import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelSelectedpopupComponent } from './cancel-selectedpopup.component';

describe('CancelSelectedpopupComponent', () => {
  let component: CancelSelectedpopupComponent;
  let fixture: ComponentFixture<CancelSelectedpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelSelectedpopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelSelectedpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
