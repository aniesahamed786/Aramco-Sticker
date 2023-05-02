import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorAccessComponent } from './contractor-access.component';

describe('ContractorAccessComponent', () => {
  let component: ContractorAccessComponent;
  let fixture: ComponentFixture<ContractorAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractorAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractorAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
