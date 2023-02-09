import { fadeInOut } from './../../Services/animation';
import { OrderService } from './../../Services/order/order.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import {
  NgxScannerQrcodeService,
  ScannerQRCodeResult,
} from 'ngx-scanner-qrcode';
import { Observable, throwError } from 'rxjs';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [],
  animations: [fadeInOut],
})
export class FooterComponent implements OnInit {
  @Input() isCheck?: any = 'home';
  @Output() emitShow = new EventEmitter<string>();
  output: any;
  globalAction: any;
  numberUnread: any = null;
  // QR code
  switchCamera: any;
  currentCam: any = 'front';
  action: any;
  public qrCodeResult: ScannerQRCodeResult[] = [];
  success: any = false;
  checkDataAction: any;
  showError: any = false;
  // comment
  resTicketID: any = '';
  interval: any;
  constructor(private orderService: OrderService) {
    // lấy ra số lượng thông báo chưa đọc để hiển thị 
    this.numberUnread = localStorage.getItem('numberUnread')
      ? localStorage.getItem('numberUnread')
      : null;
    if (this.numberUnread == 0) {
      this.numberUnread = null;
    }
    this.interval = setInterval(() => {
      this.numberUnread = localStorage.getItem('numberUnread')
        ? localStorage.getItem('numberUnread')
        : null;

      if (this.numberUnread == 0) {
        this.numberUnread = null;
      }
      // console.log('footer interval')
    }, 1000);

    this.switchCamera = (facingMode: any) => {
      const options = {
        audio: false,
        video: {
          facingMode,
        },
      };

      window.navigator.mediaDevices.getUserMedia(options);
    };
  }

  // nếu đổi trang thì clear interval
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  openQrScanner(action: any) {
    this.action = action;
    action.data.value.data = undefined;
    action.start();

    this.intervalQrCode(action);
  }

  // Quét mã QR
  intervalQrCode(action: any) {
    // restart data
    action.data.value.data = undefined;
    this.checkDataAction = setInterval(() => {
      if (action.data.value.data) {
        clearInterval(this.checkDataAction);
        console.log(action.data.value.data);
        // nếu có dữ liệu thì dừng lại kiểm tra
        this.orderService
          .Ticket_GetIdFromBarcode(action.data.value.data)
          .subscribe(
            (res: any) => {
              console.log('variable in Ticket_GetIdFromBarcode');
              console.log(JSON.parse(res.result));
              // Lấy ra resTicketID
              this.resTicketID =
                JSON.parse(res.result).length != 0
                  ? JSON.parse(res.result)[0].ResticketId
                  : '';

              const dataToAPI = {
                Ticket_Id: this.resTicketID,
                PosId: 9,
                Type: 0,
              };
              //  trường hợp đúng thì gọi API và hiện thông báo success
              if (this.resTicketID != '') {
                this.orderService
                  .TicketApplyVipCard(JSON.stringify(dataToAPI))
                  .subscribe((res: any) => {
                    action.stop();
                    this.success = true;
                  });
              } else {
                this.showError = true;
                // Nếu sai mã QR thì dùng 5s để thông báo cho người dùng
                setTimeout(() => {
                  this.showError = false;
                  this.intervalQrCode(action);
                }, 5000);
              }
            },
            (error: any) => {
              console.log(error);
            }
          );
      }
    }, 100);
  }

  close() {
    this.action.stop();
    clearInterval(this.checkDataAction);
  }

  catchEvent(value: any) {
    this.success = value;
  }

  getResTicketID(value: any) {
    this.resTicketID = value;
  }

  switchCam() {
    if (this.currentCam == 'front') {
      // dùng cam sau 
      this.switchCamera('environment');
      this.currentCam = 'back';
    } else if (this.currentCam == 'back') {
      // dùng cam trước  
      this.switchCamera('user');
      this.currentCam = 'front';
    }
  }

  ngOnInit(): void {}
}
