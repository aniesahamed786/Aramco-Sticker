import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeStickerDetailsComponent } from './employee-sticker-details.component';

describe('EmployeeStickerDetailsComponent', () => {
  let component: EmployeeStickerDetailsComponent;
  let fixture: ComponentFixture<EmployeeStickerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeStickerDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeStickerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
