import { TranslateService } from '@ngx-translate/core';
import { VoucherService } from './../../Services/voucher/voucher.service';
import { Location } from '@angular/common';
import { BrandService } from './../../Services/brand/brand.service';
import { FoodItemService } from './../../Services/food-item/food-item.service';
import { fadeInOut } from './../../Services/animation';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import SwiperCore, { SwiperOptions, Pagination, Navigation } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { MessagingService } from 'src/app/Shared/messaging-service/messaging.service';
import { elementAt } from 'rxjs';

SwiperCore.use([Pagination, Navigation]);
@Component({
  selector: 'app-brand-home',
  templateUrl: './brand-home.component.html',
  styleUrls: [],
  animations: [fadeInOut],
})
export class BrandHomeComponent implements OnInit {
  mainBranch: any;
  idBusiness: any;
  location: any;

  listCategories: any;

  listFood: any = [];
  listOptions = [
    { title: this.translate.instant('COMMON.News'), value: 'news' },
    { title: this.translate.instant('COMMON.Menu'), value: 'menu' },
    { title: this.translate.instant('COMMON.Voucher'), value: 'voucher' },
  ];

  isBuffet: any = false;
  items: any = [];
  option: any = 'news';

  //#region MENU DATA

  //#endregion

  //#region LOGIC MENU
  categoryFoodSelecting: any;
  configCategoriesMenu: SwiperOptions = {
    autoHeight: true,
    allowTouchMove: true,
    spaceBetween: 20,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true,
    },
    centeredSlides: true,
    loop: true,
    width: 110,
  };

  configBanner: SwiperOptions = {
    autoHeight: true,
    allowTouchMove: true,
    spaceBetween: 20,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true,
    },
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
  };

  listBanner: any = [
    {
      src: 'assets/Images/buffet-exp-1.png',
      title: 'Buffet Thịt Nướng 199k',
      price: '199,000đ',
      condition: 'Tất cả các khung giờ từ T2 & T3',
    },

    {
      src: 'assets/Images/buffet-exp-1.png',
      title: 'Buffet Thịt Nướng 199k',
      price: '199,000đ',
      condition: 'Tất cả các khung giờ từ T2 & T3',
    },

    {
      src: 'assets/Images/buffet-exp-1.png',
      title: 'Buffet Thịt Nướng 199k',
      price: '199,000đ',
      condition: 'Tất cả các khung giờ từ T2 & T3',
    },
  ];

  listFoodBuffet: any = [
    {
      src: 'assets/Images/buffet-exp-2.png',
      title: 'Hải Sản',
    },
    {
      src: 'assets/Images/buffet-exp-3.png',
      title: 'Ba Chỉ Bò',
    },
    {
      src: 'assets/Images/buffet-exp-2.png',
      title: 'Hải Sản',
    },
    {
      src: 'assets/Images/buffet-exp-3.png',
      title: 'Ba Chỉ Bò',
    },
  ];

  // dùng trong html dùng để lấy các giá trị category hiện tại
  public selectCategoryFood(value: any = this.categoryFoodSelecting) {
    this.categoryFoodSelecting = value;
    // this.isBuffet = value == 'buffet';
    let listIdHasCategory: any = [];
    if (localStorage.getItem('listIdHasCategory')) {
      listIdHasCategory = localStorage.getItem('listIdHasCategory');
      listIdHasCategory = JSON.parse(listIdHasCategory);
    }

    const checkExistCategory = listIdHasCategory.includes(value);
    if (checkExistCategory) {
      // LOCAL STORAGE CALL
      const listFood: any = localStorage.getItem('listFood');
      this.listFood = JSON.parse(listFood);
      this.items = this.listFood.filter((obj: any) => obj.MenuId == value);
      return this.items;
    } else {
      // API CALL
      this.foodService
        .foodItemGetByMenu(this.idBusiness, value)
        .subscribe((listItem: any) => {
          let arrayData: any = JSON.parse(listItem.result);
          arrayData.forEach((item: any) => {
            // thêm chi nhánh vào món ăn
            item.brand = this.mainBranch;
            this.listFood.push(item);
          });

          this.items = this.listFood.filter((obj: any) => obj.MenuId == value);
          localStorage.setItem('listFood', JSON.stringify(this.listFood));
          return this.items;
        });

      // nếu chưa có key trong local thì thêm vào
      listIdHasCategory.push(value);
      localStorage.setItem(
        'listIdHasCategory',
        JSON.stringify(listIdHasCategory)
      );
    }
  }

  public getOption(value: any = this.listOptions[1].value) {
    return (this.option = value);
  }
  //#endregion

  //#region NEWS DATA
  listBannerNews = [
    { src: 'assets/Images/news-banner-1.png' },
    { src: 'assets/Images/news-banner-1.png' },
    { src: 'assets/Images/news-banner-1.png' },
  ];

  listDeal: any = [];

  branches: any = [];

  listFlashSale = [];
  //#endregion

  //#region LOGIC NEWS
  configBannerNews: SwiperOptions = {
    autoHeight: true,
    allowTouchMove: true,
    spaceBetween: 5,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true,
    },
    slidesPerView: 1.1,
    centeredSlides: true,
    loop: true,
    // breakpoints: {
    //   480: {
    //     slidesPerView: 1.5,
    //   },
    //   768: {
    //     slidesPerView: 2,
    //   },
    // },
  };
  //#endregion

  //#region VOUCHER DATA
  listVouchers: any = [
    {
      src: 'assets/Images/voucher-exp-3.png',
      title: '[ƯU ĐÃI] Mua 1 tặng 1. Bánh nóng giao tận nhà',
      condition: '',
      dayOfDate: 'Hết hạn 20/10/2022',
      status: 'good',
      using: true,
    },
    {
      src: 'assets/Images/voucher-exp-3.png',
      title: '[ƯU ĐÃI] Mua 1 tặng 1. Bánh nóng giao tận nhà',
      condition: 'Chỉ áp dụng với thành viên',
      dayOfDate: 'Hết hạn 20/10/2022',
      status: 'good',
      using: true,
    },
  ];

  yourVouchers: any = [
    {
      src: 'assets/Images/voucher-exp-4.png',
      title: 'Miễn phí 1 bánh Beef BBQ Pizza',
      using: true,
      required: '800',
      brand: 'BUZZA PIZZA',
    },
    {
      src: 'assets/Images/voucher-exp-4.png',
      title: 'Miễn phí 1 bánh Beef BBQ Pizza',
      using: true,
      required: '800',
      brand: 'BUZZA PIZZA',
    },
  ];

  scoreUser: any = 0;
  //#endregion

  // #region LOGIC VOUCHERS
  configOutstanding: SwiperOptions = {
    autoHeight: true,
    allowTouchMove: true,
    spaceBetween: 16,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true,
    },
    slidesPerView: 1.5,
    loop: true,
    breakpoints: {
      480: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 2,
      },
    },
  };

  //#endregion
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  constructor(
    brandService: BrandService,
    private foodService: FoodItemService,
    private route: ActivatedRoute,
    private voucherService: VoucherService,
    private translate: TranslateService,
    // đừng có xóa cái này
    private locationRoute: Location
  ) {
    // khai báo các biến
    localStorage.removeItem('listFood');
    localStorage.removeItem('listIdHasCategory');
    // this.items = this.selectCategoryFood();
    if (localStorage.getItem('news')) {
      this.listDeal = localStorage.getItem('news');
      this.listDeal = JSON.parse(this.listDeal);
      this.listDeal = this.listDeal.slice(0, 2);
    }
    // dùng đề chuyển đường dẫn
    this.location = locationRoute;
    // lây ra món ăn từ nhà hàng
    this.route.params.subscribe((params: any) => {
      let mainBranch: any = localStorage.getItem('branches');
      this.branches = localStorage.getItem(params.brandID);
      this.branches = JSON.parse(this.branches);
      console.log(this.branches);
      if (mainBranch != null) {
        mainBranch = JSON.parse(mainBranch);

        // tìm ra cái brand hiện tại
        mainBranch = mainBranch.filter(
          (obj: any) => obj.BrandID == params.brandID
        );

        this.mainBranch = mainBranch[0].BrandName.toLowerCase();
        console.log(this.mainBranch)
      }

      // get list business by name
      brandService
        .businessGetByName(params.brandID)
        .subscribe((businessData: any) => {
          let business: any = JSON.parse(businessData.result);
          if (business[0] != null) {
            // Tìm nhà hàng mà khách chọn
            business = business.filter((obj: any) => obj.bid == params.bid);
            business = business[0];
          } else locationRoute.back();
          this.idBusiness = business.bid;
          // Lấy ra danh sách voucher của nhà hàng
          this.getVoucher(this.idBusiness);

          //  get menu food trong lần đầu tiên vào trang
          this.foodService
            .menuItemGetABranch(this.idBusiness)
            .subscribe((menuData: any) => {
              this.listCategories = JSON.parse(menuData.result);

              this.listCategories = this.listCategories.filter(
                (category: any) => category.menuid != 1947
              );
              this.categoryFoodSelecting = this.listCategories[0].menuid;
              this.items = this.selectCategoryFood(this.categoryFoodSelecting);
            });



          this.foodService
            .foodItemGetFlashSale(this.idBusiness, params.brandID)
            .subscribe((flashSaleItem: any) => {
              this.listFlashSale = JSON.parse(flashSaleItem.result);
              this.listFlashSale = this.listFlashSale.slice(0, 2);
              console.log(this.listFlashSale);
            });
        });
    });

    // Lấy ra điểm của user để hiển thị lên giao diện
    this.getProfile();
    // Lấy ra danh sách voucher
  }

  public getVoucher(idBusiness: any) {
    if (!localStorage.getItem('listVouchers')) {
      localStorage.setItem('listVouchers', JSON.stringify([]));
      localStorage.setItem('listVoucherBranchesID', JSON.stringify([]));
    }
    let tempBranchID: any = localStorage.getItem('listVoucherBranchesID');
    tempBranchID = JSON.parse(tempBranchID);
    // kiêm tra đã lưu trong trong localStorage chưa
    const exist = tempBranchID.find((element: any) => element == idBusiness);
    if (exist) {
      let temp: any = localStorage.getItem('listVouchers');
      temp = JSON.parse(temp);
      this.listVouchers = temp.filter(
        (element: any) => element.BranchId == idBusiness
      );
      console.log(this.listVouchers);
    } else {
      this.voucherService
        .Restaurant_getAll(idBusiness)
        .subscribe((data: any) => {
          // hạn chế gọi API
          let temp: any = localStorage.getItem('listVouchers');
          temp = JSON.parse(temp);
          temp.push(...JSON.parse(data.result));
          localStorage.setItem('listVouchers', JSON.stringify(temp));
          // các ID nhà hàng
          temp = localStorage.getItem('listVoucherBranchesID');
          temp = JSON.parse(temp);
          temp.push(idBusiness);
          localStorage.setItem('listVoucherBranchesID', JSON.stringify(temp));
          this.listVouchers = JSON.parse(data.result);
        });
    }
  }

  public getProfile() {
    if (localStorage.getItem('profileUser')) {
      this.scoreUser = localStorage.getItem('profileUser');
      this.scoreUser = JSON.parse(this.scoreUser);
      this.scoreUser = this.scoreUser.currentPoint;
    }
  }

  ngOnInit(): void {}
}
