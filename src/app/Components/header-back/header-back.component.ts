import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-back',
  templateUrl: './header-back.component.html',
  styleUrls: [],
})
export class HeaderBackComponent implements OnInit {
  @Input() title: any;
  @Input() fz: any = '20';
  @Input() position: any = 'between';
  @Input() showCart: any = false;
  @Input() showLocation: any = false;
  @Input() showBack: any = true;
  @Input() showBooking: any = false;
  @Input() showShare: any = false;
  showPayment: any = false;
  currentFoodInCart: any;
interval: any;
  constructor(private location: Location) {
    this.currentFoodInCart = localStorage.getItem('currentCart');
    this.currentFoodInCart = JSON.parse(this.currentFoodInCart);
    this.currentFoodInCart = this.currentFoodInCart
      ? this.currentFoodInCart.length
      : '';
    this.interval = setInterval(() => {
      if (localStorage.getItem('currentCart')) {
        // cập nhập realtime phiên bản phèn vcl
        this.currentFoodInCart = localStorage.getItem('currentCart');
        this.currentFoodInCart = JSON.parse(this.currentFoodInCart);
        this.currentFoodInCart = this.currentFoodInCart
          ? this.currentFoodInCart.length
          : '';

          // console.log('header interval')
      } else this.currentFoodInCart = false;
    }, 2000);
  }
  ngOnInit(): void {}
  back(): void {
    this.location.back();
  }

  ngOnDestroy() {
    clearInterval(this.interval)
  }


  togglePayment(): void {
    this.showPayment = !this.showPayment;
  }

  getShow(value: any) {
    this.showPayment = value;
  }
}
