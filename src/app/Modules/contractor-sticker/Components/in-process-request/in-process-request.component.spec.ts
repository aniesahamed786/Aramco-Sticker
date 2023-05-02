import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InProcessRequestComponent } from './in-process-request.component';

describe('InProcessRequestComponent', () => {
  let component: InProcessRequestComponent;
  let fixture: ComponentFixture<InProcessRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InProcessRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InProcessRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
