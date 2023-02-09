import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-your-vouchers',
  templateUrl: './your-vouchers.component.html',
  styleUrls: [],
})
export class YourVouchersComponent implements OnInit {
  constructor() {}
  yourVouchers = [
    {
      src: 'assets/Images/voucher-exp-3.png',
      title: 'Miễn phí 1 bánh Beef BBQ Pizza khi đổi đ...',
      using: true,
      required: '800',
      brand: 'BUZZA PIZZA',
    },
    {
      src: 'assets/Images/voucher-exp-3.png',
      title: 'Miễn phí 1 bánh Beef BBQ Pizza khi đổi đ...',
      using: true,
      required: '800',
      brand: 'BUZZA PIZZA',
    },
    {
      src: 'assets/Images/voucher-exp-3.png',
      title: 'Miễn phí 1 bánh Beef BBQ Pizza khi đổi đ...',
      using: true,
      required: '800',
      brand: 'BUZZA PIZZA',
    },
  ];
  ngOnInit(): void {}
}
