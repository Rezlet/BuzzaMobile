import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashSaleSliderComponent } from './slider-flash-sale.component';

describe('FlashSaleSliderComponent', () => {
  let component: FlashSaleSliderComponent;
  let fixture: ComponentFixture<FlashSaleSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlashSaleSliderComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FlashSaleSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
