import { OrderService } from './../../Services/order/order.service';
import { GlobalFunctionService } from './../../Shared/global-function/global-function.service';
import { fadeInOut } from './../../Services/animation';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-payment-item',
  templateUrl: './payment-item.component.html',
  styleUrls: [],
  animations: [fadeInOut],
})
export class PaymentItemComponent implements OnInit {
  @Input() item: any;
  @Output() changed = new EventEmitter<boolean>();
  date: any = '';
  time: any = '';
  showCancelOrder: any = false;

  constructor(
    private globalFunction: GlobalFunctionService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    // lấy ra thời gian của phiếu nhận vào
    let orderTime = new Date(this.item.TicketTimeIn);
    this.date = this.globalFunction.convertTimeToUI(orderTime);
    this.time =
      orderTime.getHours() +
      ':' +
      (orderTime.getMinutes() < 10
        ? '0' + orderTime.getMinutes()
        : orderTime.getMinutes()) +
      (orderTime.getHours() >= 12 ? ' PM' : ' AM');
  }

  toggleCancelOrder() {
    this.showCancelOrder = !this.showCancelOrder;
  }

  cancelOrder(ticketID: any) {
    // Hủy order
    this.orderService.Ticket_UpdateStatus(1, ticketID).subscribe((res: any) => {
      this.showCancelOrder = false;

      let historyOrder: any = localStorage.getItem('historyOrder');
      historyOrder = JSON.parse(historyOrder);
      let payments = historyOrder;
      payments.map((payment: any) => {
        if (payment.TicketId == ticketID) {
          payment.TicketDeliveryStatus = 1;
        }
      });
      localStorage.setItem('historyOrder', JSON.stringify(historyOrder));
      this.changed.emit(true);
    });
  }
}
