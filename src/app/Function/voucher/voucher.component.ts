import { TranslateService } from '@ngx-translate/core';
import { VoucherService } from './../../Services/voucher/voucher.service';
import { fadeInOut } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: [],
  animations: [fadeInOut],
})
export class VoucherComponent implements OnInit {
  //#region fake voucher
  listVouchers: any = [
    {
      src: 'assets/Images/voucher-exp.png',
      title: 'Giảm 20K',
      condition: 'Cho đơn hàng từ 179K',
      dayOfDate: 'Hết hạn trong 4 ngày',
      status: 'warning',
      using: true,
      titleEvent: '[Buzza Pizza] Ưu đãi tháng 10',
      qrCode: '#ASD433',
      srcQR: 'assets/Images/qr-exp.png',
    },
    {
      src: 'assets/Images/voucher-exp.png',
      title: 'Giảm 20K',
      condition: 'Cho đơn hàng từ 179K',
      dayOfDate: 'Hết hạn 20/10/2022',
      status: 'good',
      using: true,
      titleEvent: '[Buzza Pizza] Ưu đãi tháng 10',
      qrCode: '#ASD433',
      srcQR: 'assets/Images/qr-exp.png',
    },
    {
      src: 'assets/Images/voucher-exp.png',
      title: 'Giảm 20K',
      condition: 'Cho đơn hàng từ 179K',
      dayOfDate: 'Hết hạn 20/10/2022',
      status: 'good',
      using: true,
      titleEvent: '[Buzza Pizza] Ưu đãi tháng 10',
      qrCode: '#ASD433',
      srcQR: 'assets/Images/qr-exp.png',
    },
    {
      src: 'assets/Images/voucher-exp-2.png',
      title: 'Voucher giảm giá 100K cho hóa đơn từ 599K',
      condition: '',
      dayOfDate: 'Hết hạn 20/10/2022',
      status: 'good',
      using: true,
      titleEvent: '[Buzza Pizza] Ưu đãi tháng 10',
      qrCode: '#ASD433',
      srcQR: 'assets/Images/qr-exp.png',
    },
    {
      src: 'assets/Images/voucher-exp-2.png',
      title: 'Giảm 20K',
      condition: 'Cho đơn hàng từ 179K',
      dayOfDate: 'Đã sử dụng',
      status: 'danger',
      using: false,
      titleEvent: '[Buzza Pizza] Ưu đãi tháng 10',
      qrCode: '#ASD433',
      srcQR: 'assets/Images/qr-exp.png',
    },
  ];

  StatusVoucher = [
    { title:this.translate.instant('COMMON.All'), value: 1 },
    { title: this.translate.instant('COMMON.Used'), value: 2 },
  ];

  //#endregion
  status = 'all';

  listShows: any;

  constructor(private voucherService: VoucherService,  private translate: TranslateService) {
    this.listShows = this.getValueItems(this.status);

    this.listVouchers = localStorage.getItem('myVoucher');
    this.listVouchers = JSON.parse(this.listVouchers);
  }

  ngOnInit(): void {}

  public getValueItems(value: any = this.StatusVoucher[0].value) {
    this.listShows = this.listVouchers.filter((item: any) => {
      item.status == value;
      if (value == 'all') {
        return true;
      } else if (value == 2) {
        return !item.using;
      }

      return;
    });
    return this.listShows;
  }

  public getStatus(value: any) {
    this.status = value;
  }
}
