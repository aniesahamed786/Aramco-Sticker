import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewStickerComponent } from './renew-sticker.component';

describe('RenewStickerComponent', () => {
  let component: RenewStickerComponent;
  let fixture: ComponentFixture<RenewStickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenewStickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenewStickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
