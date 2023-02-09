import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFlashSaleComponent } from './order-flash-sale.component';

describe('OrderFlashSaleComponent', () => {
  let component: OrderFlashSaleComponent;
  let fixture: ComponentFixture<OrderFlashSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderFlashSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderFlashSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
