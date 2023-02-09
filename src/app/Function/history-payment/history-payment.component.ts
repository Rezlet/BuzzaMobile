import { OrderService } from './../../Services/order/order.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { fadeInOut } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-payment',
  templateUrl: './history-payment.component.html',
  styleUrls: [],
  animations: [fadeInOut],
})
export class HistoryPaymentComponent implements OnInit {
  // booking
  booking = [];
  // payment
  payments = [];
  isBooking = false;
  functions = [
    { title: this.translate.instant('COMMON.Booking'), value: 'booking' },
    { title: this.translate.instant('COMMON.Payment'), value: 'payment' },
  ];

  constructor(
    router: Router,
    private translate: TranslateService,
    private orderService: OrderService
  ) {
    this.toggleBooking();
    this.updateChanged('');
  }
  ngOnInit(): void {}
  public toggleBooking(value: any = 'booking') {
    this.isBooking = value == 'booking' ? true : false;
    return value == 'booking' ? true : false;
  }

  updateChanged(value: any) {
    // lấy ra lịch sử đặt hàng và lịch sử đặt bàn
    let historyBooking: any = localStorage.getItem('historyBooking');
    let historyOrder: any = localStorage.getItem('historyOrder');

    // Nếu không có thì hiển thị giao diện khác
    if (historyBooking == null) {
      return;
    } else {
      historyBooking = JSON.parse(historyBooking);
      this.booking = historyBooking;
    }

    if (historyOrder == null) {
      return;
    } else {
      historyOrder = JSON.parse(historyOrder);
      this.payments = historyOrder;
      if (historyOrder.length != 0) {
        historyOrder.map((element: any) => {
          this.orderService
            .Ticket_GetInfo(element.TicketId)
            .subscribe((data: any) => {
              element.Orders = JSON.parse(data.result).TicketItem;
            });
        });
      }
    }

  }
}
