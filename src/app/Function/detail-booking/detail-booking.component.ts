import { ActivatedRoute } from '@angular/router';
import { fadeInOut } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-booking',
  templateUrl: './detail-booking.component.html',
  styleUrls: [],
  animations: [fadeInOut],
})
export class DetailBookingComponent implements OnInit {
  item = {
    banner: 'assets/Images/restaurent-exp-1.png',
    brand: 'Buzza Pizza',
    title: 'TTTM Nowzone',
    rating: 4.3,
    voting: 12,
    address: ' Tầng 4 Nowzone, 235 Nguyễn Văn...',
  };

  business: any;
  
  showBooking: any = false;

  constructor( private route: ActivatedRoute) {
    this.route.params.subscribe((params: any) => {
      // lấy tất cả business trong local storge
     this.business = localStorage.getItem(params.brandID)
      
      if(this.business != null){
        // tìm ra business đã chọn bằng id
        this.business = JSON.parse(this.business)
        this.business = this.business.find((item: any) => item.bid == params.businessID)
      }
    });
  }

  ngOnInit(): void {}

  toggleShowBooking() {
    this.showBooking = !this.showBooking;
  }

  getShowBooking(value: any) {
    this.showBooking = value;
  }
}
