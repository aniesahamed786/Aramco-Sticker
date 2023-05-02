import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FSubmissionComponent } from './fsubmission.component';

describe('FSubmissionComponent', () => {
  let component: FSubmissionComponent;
  let fixture: ComponentFixture<FSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FSubmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
