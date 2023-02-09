import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderNewsComponent } from './order-news.component';

describe('OrderNewsComponent', () => {
  let component: OrderNewsComponent;
  let fixture: ComponentFixture<OrderNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
