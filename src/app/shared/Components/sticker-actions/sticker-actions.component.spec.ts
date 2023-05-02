import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickerActionsComponent } from './sticker-actions.component';

describe('StickerActionsComponent', () => {
  let component: StickerActionsComponent;
  let fixture: ComponentFixture<StickerActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickerActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickerActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
