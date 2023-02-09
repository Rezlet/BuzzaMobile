import { Router, ActivatedRoute, Params } from '@angular/router';
import { OrderService } from './../../Services/order/order.service';
import { SwiperOptions } from 'swiper';
import { fadeInOut } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: [],
  animations: [fadeInOut],
})
export class ConfirmOrderComponent implements OnInit {
  totalPrice: any = 0;
  listItemInOrder: any;
  showSuccess: any = false;
  showPayment: any = false;
  method: any = 1;
  paymentImage: any = 'money-bag.svg';
  configCategoriesMenu: SwiperOptions = {
    autoHeight: true,
    allowTouchMove: true,
    spaceBetween: 24,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true,
    },
    slidesPerView: 1.2,
    loop: true,
  };

  selectedVoucher = {
    src: 'assets/Images/voucher-exp-3.png',
    title: 'Miễn phí 1 bánh Beef BBQ Pizza khi đổi đ...',
    using: true,
    required: '800',
    brand: 'BUZZA PIZZA',
  };

  selectShipping: any = true;

  constructor(
    private router: Router,
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute
  ) {
    if (localStorage.getItem('currentCart')) {
      this.totalPrice = 0;
      this.listItemInOrder = localStorage.getItem('currentCart');
      this.listItemInOrder = JSON.parse(this.listItemInOrder);
      //  hiển thị item
      this.listItemInOrder.map((item: any) => {
        this.totalPrice = this.totalPrice + item.TotalAmount;
      });
    }
  }

  ngOnInit(): void {
    if (!localStorage.getItem('orderDetail')) {
      this.router.navigate(['/']);
    }

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      console.log(params);
    });
  }

  public choiceShipping() {
    this.selectShipping = true;
  }

  // gửi order dựa theo phương thức thanh toán 
  // từng phương thức sẽ có function ở dưới
  sendOrder() {
    console.log(this.method);
    if (this.method == 1) {
      this.paymentCod();
    } else if (this.method == 2) {
      this.paymentMB();
    } else if (this.method == 3) {
      this.paymentMoMo();
    } else if (this.method == 4) {
      this.paymentZalo();
    } else if (this.method == 5) {
      this.paymentCredit();
    }

    // firebase here 
    
  }

  paymentMoMo() {
    console.log('payment Mo Mo');
  }

  paymentMB() {
    let dataToAPI: any = {
      access_code: 'GUBBCHDUQS',
      amount: this.totalPrice,
      cancel_url: 'https://buzzamobile.ezitouch.com:2443',
      currency: 'VND',
      device: 'POS001',
      ip_address: '103.150.241.241',
      ipn_url: 'https://buzzamobile.ezitouch.com:2443/confirm-order',
      merchant_id: '103169',
      order_info: 'Thanh toan F2TECH',
      order_reference: 'RQQR12010008',
      payment_method: 'ATMCARD',
      return_url: 'https://buzzamobile.ezitouch.com:2443/confirm-order',
    };

    this.orderService
      .MB_PaymentCreate(JSON.stringify(dataToAPI))
      .subscribe((res: any) => {
        console.log(res.message);
      });
  }

  paymentZalo() {
    console.log('payment Zalo');
  }

  paymentCredit() {
    console.log('payment Credit');
  }

  paymentCod() {
    let info: any = localStorage.getItem('orderDetail');
    info = JSON.parse(info);
    let user: any = localStorage.getItem('detailUser');
    user = JSON.parse(user);
    let dataToAPI = {
      TicketId: info.TicketID,
      OrderId: info.OrderId,
      PosId: 9,
    };
    this.orderService
      .sendItemOrdering(JSON.stringify(dataToAPI))
      .subscribe((res: any) => {
        const status = JSON.parse(res.result)[0].ErrorStatus;
        if (status == 0) {
          localStorage.removeItem('currentCart');
          localStorage.removeItem('orderDetail');
          this.showSuccess = true;

          // lấy lịch sử mua hàng của khách
          setTimeout(() => {
            this.orderService.Ticket_GetListByUserId().subscribe((res: any) => {
              let historyOrders: any = JSON.parse(res.result);
              localStorage.setItem(
                'historyOrder',
                JSON.stringify(historyOrders)
              );
            });
          }, 1000);
        } else {
        }
      });
  }

  catchEmit(value: any) {
    this.showSuccess = value;
    this.router.navigate(['/']);
  }

  public choiceComing() {
    this.selectShipping = false;
  }

  togglePayment() {
    this.showPayment = !this.showPayment;
  }
  catchPayment(value: any) {
    this.showPayment = value;
  }

  catchMethod(value: any) {
    this.method = value;
    // 1 cod
    // 2 MB
    // 3 momo
    // 4 zalo
    // 5 credit card
    if (this.method == 1) {
      this.paymentImage = 'money-bag.svg';
    } else if (this.method == 2) {
      this.paymentImage = '';
    } else if (this.method == 3) {
      this.paymentImage = 'momo-vertical.svg';
    } else if (this.method == 4) {
      this.paymentImage = 'zalopay.svg';
    } else if (this.method == 5) {
      this.paymentImage = 'credit-card.svg';
    }
  }
}
