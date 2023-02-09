import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';
import { fadeInOut } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [],
  animations: [fadeInOut],
})

//  chỗ này không lỗi
export class HomeComponent implements OnInit {
  isLoaded: any = false;
  listNews: any = [];
  profileInfo: any = false;
  showPayment: any = false;
  currentFoodInCart: any;
  currentPoint: any = 0;
  interval: any;
  listCarousel: any = [
    {
      src: 'assets/Images/carousel-exp-1.png',
    },
    {
      src: 'assets/Images/carousel-exp-1.png',
    },
    {
      src: 'assets/Images/carousel-exp-1.png',
    },
  ];

  configCarousel: SwiperOptions = {
    autoHeight: true,
    allowTouchMove: true,
    spaceBetween: 24,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true,
    },
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    pagination: {
      clickable: true,
    },
  };

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // cập nhập realtime phiên bản phèn vcl
    this.currentFoodInCart = localStorage.getItem('currentCart');
    this.currentFoodInCart = JSON.parse(this.currentFoodInCart);
    this.currentFoodInCart = this.currentFoodInCart
      ? this.currentFoodInCart.length
      : '';
    if (localStorage.getItem('currentCart')) {
      this.interval = setInterval(() => {
        this.currentFoodInCart = localStorage.getItem('currentCart');
        this.currentFoodInCart = JSON.parse(this.currentFoodInCart);
        this.currentFoodInCart = this.currentFoodInCart.length;
      }, 2000);
    } else this.currentFoodInCart = false;

    
  }

  ngOnInit(): void {
    this.getLocalStorage();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  togglePayment(): void {
    this.showPayment = !this.showPayment;
  }
  getShow(value: any) {
    this.showPayment = value;
  }

  public getLocalStorage() {
    let count = 0;

    const updateNews = setInterval(() => {
      const localNews: any = localStorage.getItem('news');
      this.listNews = JSON.parse(localNews);
      if (this.listNews != null) {
        clearInterval(updateNews);
      } else if (count == 10) {
        clearInterval(updateNews);
      }
      count++;
    }, 100);

    if (
      localStorage.getItem('updateUser') == '1' ||
      localStorage.getItem('detailUser')
    ) {
      const updateUser = setInterval(() => {
        const profileInfo: any = localStorage.getItem('detailUser');
        this.profileInfo = JSON.parse(profileInfo);
        this.currentPoint = localStorage.getItem('profileUser');
        this.currentPoint = JSON.parse(this.currentPoint);

        this.currentPoint = this.currentPoint.currentPoint;
        if (this.profileInfo != null) {
          clearInterval(updateUser);
        } else if (count == 10) {
          clearInterval(updateUser);
        }
        count++;
      }, 100);
    }
  }
}
