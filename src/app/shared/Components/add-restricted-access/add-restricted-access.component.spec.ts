import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRestrictedAccessComponent } from './add-restricted-access.component';

describe('AddRestrictedAccessComponent', () => {
  let component: AddRestrictedAccessComponent;
  let fixture: ComponentFixture<AddRestrictedAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRestrictedAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRestrictedAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
