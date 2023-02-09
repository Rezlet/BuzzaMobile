import { GlobalFunctionService } from './../../Shared/global-function/global-function.service';
import { BookingService } from './../../Services/booking/booking.service';
import { Router } from '@angular/router';
import { ScaleY } from './../../Services/animation';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-booking-layout',
  templateUrl: './booking-layout.component.html',
  styleUrls: [],
  animations: [ScaleY],
})
export class BookingLayoutComponent implements OnInit {
  @Input() showBooking: any = false;
  @Input() item: any;
  @Output() emit = new EventEmitter<any>();
  @Input() oldEdit: any = false;
  showSuccess: any = false;
  router: any;
  bookingService: any;
  currentDate = new Date();
  isEqualDate = true;
  errors: any = null;
  submitted: any;
  timeToAppointment: any = [];

  timeEdited: any = false;
  // biến cần phải đổi khi làm đa ngôn ngữ
  weekTranslate: any = [
    this.translate.instant('date.Monday'),
    this.translate.instant('date.Tuesday'),
    this.translate.instant('date.Wednesday'),
    this.translate.instant('date.Thursday'),
    this.translate.instant('date.Friday'),
    this.translate.instant('date.Saturday'),
    this.translate.instant('date.Sunday'),
  ];
  timeCanChoice: any = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  amountAdult: any = 1;
  amountChildren: any = 0;
  time: any;
  showChoiceDay: any = false;
  showChoiceTime: any = false;

  constructor(
    router: Router,
    bookingService: BookingService,
    private functionGlobal: GlobalFunctionService,
    private translate: TranslateService
  ) {
    this.router = router;
    this.bookingService = bookingService;
  }

  ngOnInit(): void {
    const curDate = new Date();
    // thêm ngày hiện tại vào mảng
    const dateImport = {
      date: curDate.getDate(),
      day: this.weekTranslate[curDate.getDay()],
    };
    this.timeToAppointment.push(dateImport);
    //  thêm 6 ngày tiếp theo vào thời gian có thể chọn
    for (let i = 0; i < 6; i++) {
      curDate.setDate(curDate.getDate() + 1);
      const dateImport = {
        date: curDate.getDate(),
        day: this.weekTranslate[curDate.getDay()],
        month: curDate.getMonth(),
      };
      this.timeToAppointment.push(dateImport);
    }

    if (this.oldEdit) {
      // sử dụng cho chỉnh sửa thời gian đặt bàn
      let time = new Date(this.oldEdit.BookingFromDate);
      this.timeEdited = {
        date: time.getDate(),
        time: time.getHours(),
      };
      this.amountAdult = this.oldEdit.NumberOfAdult;
      this.amountChildren = this.oldEdit.NumberOfChildren;
    }

  }

  public changeDate(value: any) {
    const selectedDate = new Date(value);
    if (
      selectedDate.getDate() == this.currentDate.getDate() &&
      selectedDate.getMonth() == this.currentDate.getMonth() &&
      selectedDate.getFullYear() == this.currentDate.getFullYear()
    )
      this.isEqualDate = true;
    else this.isEqualDate = false;
  }

  submitToCreateBooking(data: any) {
    this.submitted = true;
    const time = new Date();
    // filter ra ngày cần chọn
    let user: any = localStorage.getItem('detailUser');
    if (localStorage.getItem('detailUser')) {
      user = JSON.parse(user);
    } else {
      this.router.navigate(['/login']);
      // chuyển hướng về trong login khi chưa đăng nhập và dừng lại hoàn toàn tiến trình submit
      return;
    }
    const timeSelected = this.timeToAppointment.find(
      (element: any) => element.date == data.date
    );

    // Validator
    if (!data.date || !data.time || data.amountAdult == 0) {
      this.errors = {};
      if (!data.time) {
        this.errors.time =  this.translate.instant('err.booking-layout-1');
      }

      if (!data.date) {
        this.errors.date = this.translate.instant('err.booking-layout-2');
      }

      if (data.amountAdult == 0) {
        this.errors.amount =  this.translate.instant('err.booking-layout-3');
      }
      return;
    }
    // nếu không có lỗi thì k trả về trống trong trường hợp trước đó đã lỗi
    this.errors = null;
    // chọn lại thời gian
    if (timeSelected.month == 0 && timeSelected.month < 7) {
      time.setFullYear(time.getFullYear() + 1);
    }
    time.setDate(timeSelected.date);
    time.setMonth(timeSelected.month);
    time.setHours(data.time, 0, 0);
    // format lại trước khi đưa vào API
    const timeFrom = this.functionGlobal.convertTimeToAPI(time);

    const dataToAPI = {
      ReservationId: this.oldEdit ? this.oldEdit.Id : 0,
      Reservation_Subject: data.subject ? data.subject : '',
      Reservation_BookingFrom: timeFrom,
      Reservation_BookingTo: '2022-11-23 04:56:22',
      Reservation_NoOfPax: data.amountAdult + data.amountChildren,
      Reservation_Adult: data.amountAdult,
      Reservation_Children: data.amountChildren,
      Reservation_NoOfTable: 1,
      Reservation_DepositAmount: 0,
      Reservation_Description: data.description,
      Reservation_TotalAmount: 0,
      Reservation_DiscountAmount: 0,
      Reservation_Woman: 0,
      BranchId: this.item.bid,
      Reservation_SourceBooking: 'Mobile App',
      BranchNo: 3,
      CurrentVersion: 1,
      Reservation_Status: 1,
    };

    const JSONdata = JSON.stringify(dataToAPI);
    this.bookingService
      .bookingCreateAndUpdate(JSONdata)
      .subscribe((data: any) => {
        let infoData = JSON.parse(data.result);
        if (infoData != null) {
          infoData = infoData[0];
        }
        if (infoData.Column1 == 'Thành công') {
          this.showSuccess = true;

          this.bookingService.listHistoryGet().subscribe((data: any) => {
            let listHistoryBooking: any = JSON.parse(data.result).DATA;
            // lấy dữ liệu đặt vào local storage
            localStorage.setItem(
              'historyBooking',
              JSON.stringify(listHistoryBooking)
            );
          });
        }
      });
  }

  increaseAdult() {
    this.amountAdult++;
  }

  increaseChildren() {
    this.amountChildren++;
  }

  decreaseAdult() {
    this.amountAdult--;
  }
  decreaseChildren() {
    this.amountChildren--;
  }

  toggleShowBooking() {
    this.emit.emit(!this.showBooking);
  }

  toggleShowChoiceDay() {
    this.showChoiceDay = !this.showChoiceDay;
  }

  toggleShowChoiceTime() {
    this.showChoiceTime = !this.showChoiceTime;
  }

  catchEmit(value: any) {
    this.showSuccess = value;
  }
}
