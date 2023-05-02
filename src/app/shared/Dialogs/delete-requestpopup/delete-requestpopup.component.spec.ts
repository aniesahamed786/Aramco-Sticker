import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRequestpopupComponent } from './delete-requestpopup.component';

describe('DeleteRequestpopupComponent', () => {
  let component: DeleteRequestpopupComponent;
  let fixture: ComponentFixture<DeleteRequestpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRequestpopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteRequestpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
