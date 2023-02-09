import { fadeInOut } from './../../Services/animation';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SwiperComponent } from 'swiper/angular';
import { SwiperOptions } from 'swiper';
// install Swiper modules
import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);
@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: [],
  animations: [fadeInOut],
})
export class RewardsComponent implements OnInit {
  score: any = 2223;
  target: any = 3000;

  listReward = [
    {
      title: ' Tặng 1 phần bánh nhân ngày sinh nhật',
      content:
        'Miễn phí 1 phần bánh ngọt bất kỳ tại Korean Gril trong tháng sinh nhật của bạn',
    },

    {
      title: ' Tặng 1 phần bánh nhân ngày sinh nhật',
      content:
        'Miễn phí 1 phần bánh ngọt bất kỳ tại Korean Gril trong tháng sinh nhật của bạn',
    },
    {
      title: ' Tặng 1 phần bánh nhân ngày sinh nhật',
      content:
        'Miễn phí 1 phần bánh ngọt bất kỳ tại Korean Gril trong tháng sinh nhật của bạn',
    },
  ];

  config: SwiperOptions = {
    autoHeight: true,
    allowTouchMove: true,
    spaceBetween: 20,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true,
    },
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    breakpoints: {
      359: {
        slidesPerView: 1.5,
      },
      480: {
        slidesPerView: 2.5,
      },
      560: {
        slidesPerView: 3.5,
      },
    },
  };
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  constructor() {
    // Lấy ra điểm của user để hiển thị lên giao diện

    if (localStorage.getItem('profileUser')) {
      this.score = localStorage.getItem('profileUser');
      this.score = JSON.parse(this.score);
      this.score = this.score.currentPoint;
    }
  }

  ngOnInit(): void {}
}
