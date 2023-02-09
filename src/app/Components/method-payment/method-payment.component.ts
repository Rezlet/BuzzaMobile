import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-method-payment',
  templateUrl: './method-payment.component.html',
  styleUrls: [],
})
export class MethodPaymentComponent implements OnInit {
  @Input() showPayment: any = false;
  @Output() method = new EventEmitter<any>();
  @Output() show = new EventEmitter<boolean>();
  constructor() {}
  methodForm: any = '1';
  ngOnInit(): void {}

  submit(value: any) {
    //  chọn phương thức thanh toán truyền ra component cha  
    this.method.emit(value.method);
    this.show.emit(!this.showPayment)
  }

  togglePayment() {
    this.showPayment = !this.showPayment;
  }
}
