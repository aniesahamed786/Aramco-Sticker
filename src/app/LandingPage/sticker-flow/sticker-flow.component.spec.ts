import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickerFlowComponent } from './sticker-flow.component';

describe('StickerFlowComponent', () => {
  let component: StickerFlowComponent;
  let fixture: ComponentFixture<StickerFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickerFlowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickerFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
