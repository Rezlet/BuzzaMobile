import { SwiperOptions } from 'swiper';
import { BrandService } from './../../Services/brand/brand.service';
import { fadeInOut } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';
import { FoodItemService } from 'src/app/Services/food-item/food-item.service';

@Component({
  selector: 'app-menu-total',
  templateUrl: './menu-total.component.html',
  styleUrls: [],
  animations: [fadeInOut],
})
export class MenuTotalComponent implements OnInit {
  categories: any = [];
  // danh mục của món
  listCategories: any = [];
  // items để hiển thị ra giao diện
  items: any;
  // các chi nhánh và brands
  branches: any;
  brands: any = [];

  // Những lựa chọn hiện tại
  currentBrand: any;
  currentMenuID: any;
  // config của swiper
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
  interval: any;
  getCategoriesData() {
    localStorage.setItem('listMenuIDSaved', JSON.stringify([]));
    localStorage.setItem('listFoodSave', JSON.stringify([]));
    let branches: any = localStorage.getItem('branches');
    this.branches = JSON.parse(branches);
    if (!localStorage.getItem('listCategoriesMenu')) {
      this.branches.map((branch: any) => {
        // để hiện thị cho component select change
        let temp: any = {
          title: branch.BrandName.toLowerCase(),
          value: branch.BrandID.toLowerCase(),
        };
        this.brands.push(temp);
        this.brandService
          .businessGetByName(branch.BrandID)
          .subscribe((businessData: any) => {
            console.log('call API businessGetByName');
            let business = JSON.parse(businessData.result)[0];
            // Lấy id của chi nhánh để filter
            temp.bid = business.bid;
            this.foodService
              .menuItemGetABranch(business.bid)
              .subscribe((menuData: any) => {
                console.log('call API menuItemGetABranch');

                let menu: any = JSON.parse(menuData.result);
                temp.menu = menu;
                // chuyển về 1 mảng để dễ filter
                this.categories.push(temp);

                localStorage.setItem(
                  'listCategoriesMenu',
                  JSON.stringify(this.categories)
                );
              });
          });
      });
    } else {
      this.categories = localStorage.getItem('listCategoriesMenu');
      this.categories = JSON.parse(this.categories);
      this.categories.map((item: any) => {
        this.brands.push(item);
      });
    }
  }

  // Lấy ra danh sách đồ ăn hiển thị lên màn hình
  getFoodItem(branch: any = this.currentBrand.bid, menu: any) {
    this.currentMenuID = menu;

    // Lấy dữ liệu từ LocalStore
    let listFoodSave: any = localStorage.getItem('listFoodSave');
    let listMenuIDSaved: any = localStorage.getItem('listMenuIDSaved');

    // Phân giải API và localStore
    listMenuIDSaved = JSON.parse(listMenuIDSaved);
    listFoodSave = JSON.parse(listFoodSave);

    let exist = listMenuIDSaved.includes(menu);

    if (exist) {
      this.items = listFoodSave.filter((item: any) => item.MenuId == menu);
    } else {
      this.foodService
        .foodItemGetByMenu(branch, menu)
        .subscribe((items: any) => {
          this.items = JSON.parse(items.result);
          this.listCategories = this.listCategories.filter(
            (category: any) => category.menuid != 1947
          );
          // thêm những phần đã có vào localStore
          listMenuIDSaved.push(menu);
          this.items.map((item: any) => {
            listFoodSave.push(item);
          });

          //
          localStorage.setItem('listFoodSave', JSON.stringify(listFoodSave));
          localStorage.setItem(
            'listMenuIDSaved',
            JSON.stringify(listMenuIDSaved)
          );
        });
    }
  }

  constructor(
    private brandService: BrandService,
    private foodService: FoodItemService
  ) {
    this.getCategoriesData();

    // Phòng trường hợp load chậm và bị thiếu thông tin
    this.interval = setInterval(() => {
      if (this.categories.length == this.branches.length) {
        this.getValueItems(this.categories[this.categories.length - 1].value);

        clearInterval(this.interval);
      }
    }, 100);
  }
  ngOnInit(): void {}

  ngOnDestroy() {
    clearInterval(this.interval)
  }
  // Lấy ra các chi nhánh từ thương hiệu
  public getValueItems(value: string = this.categories[0].value) {
    let data: any = this.categories.filter((item: any) => {
      return item.value == value;
    });

    data = data[0];
    this.currentBrand = data;

    this.listCategories = data.menu;
    this.getFoodItem(data.bid, this.listCategories[0].menuid);
  }
}
