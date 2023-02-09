import { BookingService } from './../../Services/booking/booking.service';
import { GlobalFunctionService } from './../../Shared/global-function/global-function.service';
import { fadeInOut } from './../../Services/animation';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appointment-item',
  templateUrl: './appointment-item.component.html',
  styleUrls: [],
  animations: [fadeInOut],
})
export class AppointmentItemComponent implements OnInit {
  @Input() item: any;
  isComplete: any = false;
  isCancel: any = false;
  date: any;
  time: any;
  showBooking: any = false;
  showCancelLayout: any = false
  branch: any;
  constructor(
    private globalFunction: GlobalFunctionService,
    private bookingService: BookingService
  ) {}
  ngOnInit(): void {
    if (this.item.ReserStatusByNumber == 4) {
      this.isComplete = true;
    }

    if (this.item.ReserStatusByNumber == 5) {
      this.isCancel = true;
    }

    let date = new Date(this.item.BookingFromDate);
    let temp = date.getHours() > 12 ? 'PM' : 'AM';
    //  lấy số phút của giờ nhận bàn
    let tempM = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    this.date = this.globalFunction.convertTimeToUI(
      this.item.BookingFromDate,
      '/'
    );
    this.time = date.getHours() + ':' + tempM + ' ' + temp;

    this.selectBranch();
  }

  selectBranch() {
    let allBrand: any = localStorage.getItem('branches');
    allBrand = JSON.parse(allBrand);
    let allBranch: any = [];
    allBrand.map((element: any) => {
      let temp: any = localStorage.getItem(element.BrandID);
      temp = JSON.parse(temp);
      allBranch.push(...temp);
    });

    this.branch = allBranch.find(
      (element: any) => element.bid == this.item.BranchId
    );
  }

  cancelBooking() {
    let listHistory: any = localStorage.getItem('historyBooking');
    listHistory = JSON.parse(listHistory);
    console.log(listHistory);
    console.log(this.item.Id);
    listHistory.map((item: any) => {
      if (item.Id == this.item.Id) {
        console.log(item);
        item.ReserStatusByNumber = 5;
        this.isCancel = true;
      }
    });

    localStorage.setItem('historyBooking', JSON.stringify(listHistory))
    console.log(listHistory)
    this.bookingService.cancelBooking(this.item.Id).subscribe((data: any) => {
      console.log(JSON.parse(data.result))
      this.showCancelLayout = false
    })
  }

  showEditLayout() {
    this.showBooking = !this.showBooking;
  }

  getShowBooking(value: any) {
    this.showBooking = value;
  }

  toggleShowCancelLayout(){
    this.showCancelLayout = !this.showCancelLayout
  }
}
