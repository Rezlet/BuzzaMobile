import { OrderService } from './../../Services/order/order.service';
import { MessagingService } from 'src/app/Shared/messaging-service/messaging.service';
import { VoucherService } from './../../Services/voucher/voucher.service';
import { NotificationService } from './../../Services/notification/notification.service';
import { BookingService } from './../../Services/booking/booking.service';
import { LoginService } from './../../Services/login/login.service';
import { NgOtpInputConfig } from 'ng-otp-input';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: [],
})
export class OTPComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  submitted: any = false;
  otp: any = '';
  errors: any = false;
  loginService: any;
  numberphone: any = '';
  router: any;
  constructor(
    private fb: FormBuilder,
    private login: LoginService,
    private routerLink: Router,
    private bookingService: BookingService,
    private notification: NotificationService,
    private voucherService: VoucherService,
    private messageService: MessagingService,
    private orderService: OrderService
  ) {
    this.form = fb.group({});
    this.router = routerLink;
    this.numberphone = localStorage.getItem('numberPhoneUser');
    this.loginService = login;
  }
  config: NgOtpInputConfig = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '0',
    inputStyles: { width: '50px', height: '50px' },
  };
  handleOtpChange(value: any): void {
    this.otp = value;
    if (this.otp.length == 4) {
      this.onSubmit();
    }
    console.log(this.numberphone);
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.loginService
      .VerifyPhoneActivateCode(this.numberphone, this.otp)
      .subscribe(
        (data: any) => {
          const dataUser: any = JSON.parse(data.result);
          // ki???m tra OTP c?? ????ng kh??ng
          if (dataUser[0]?.Column1 != undefined) {
            // x??? l?? n???u OTP sai
            this.errors = data.msg;
            return;
          }
          console.log(dataUser.result);
          // x??? l?? n???u OTP ????ng
          const isExist = dataUser.status == 0;
          const userInfo = JSON.parse(dataUser.result)[0];
          // ??i???m c???a user
          localStorage.setItem('profileUser', JSON.stringify(dataUser.profile));
          // set th??ng tin c?? b???n c???a user
          localStorage.setItem('detailUser', JSON.stringify(userInfo));
          const time: any = new Date();
          time.setDate(time.getDate() + 90);
          document.cookie = `token=${data.token};expires=${time}`;
          console.log(document.cookie);

          // l??u key c???a firebase cho user
          console.log('save in otp');
          this.messageService.saveToken(data.token).subscribe((res: any) => {
            const resData = JSON.parse(res.result);
            console.log(resData[0]);
          });
          // xem trong database ???? t???n t???i user n??y hay ch??a
          if (isExist) {
            this.routerLink.navigate(['/']);
          } else {
            this.routerLink.navigate(['/create-user']);
          }

          // l???y l???ch s??? ?????t b??n c???a kh??ch
          this.bookingService.listHistoryGet().subscribe((data: any) => {
            let listHistoryBooking: any = JSON.parse(data.result).DATA;
            localStorage.setItem(
              'historyBooking',
              JSON.stringify(listHistoryBooking)
            );
          });

          // l???y l???ch s??? mua h??ng c???a kh??ch
          this.orderService.Ticket_GetListByUserId().subscribe((res: any) => {
            let historyOrders: any = JSON.parse(res.result);
            localStorage.setItem('historyOrder', JSON.stringify(historyOrders));
          });

          this.notification.getAll().subscribe((data: any) => {
            let myNotification: any = JSON.parse(data.result);
            localStorage.setItem(
              'myNotification',
              JSON.stringify(myNotification)
            );

            this.notification.numberUnread().subscribe((data: any) => {
              let numberUnread: any = JSON.parse(data.result)[0].NumberUnread;
              console.log(numberUnread);
              localStorage.setItem(
                'numberUnread',
                JSON.stringify(numberUnread)
              );
            });
          });

          this.voucherService.UserGet().subscribe((data: any) => {
            localStorage.setItem('myVoucher', data.result);
          });
        },
        (error: any) => console.log(error)
      );
    this.form.reset();
  }
  ngOnInit(): void {}
}
