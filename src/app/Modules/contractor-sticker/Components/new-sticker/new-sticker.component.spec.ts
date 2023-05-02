import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStickerComponent } from './new-sticker.component';

describe('NewStickerComponent', () => {
  let component: NewStickerComponent;
  let fixture: ComponentFixture<NewStickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewStickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewStickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
