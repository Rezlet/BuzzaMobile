import { FoodItemService } from './../../Services/food-item/food-item.service';
import { fadeInOut, BottomToTop } from './../../Services/animation';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: [],
  animations: [fadeInOut],
})
export class FoodItemComponent implements OnInit {
  @Input() item: any;
  showFoodItem: any = false;
  @Input() brandName: any = '';
  setMenu: any;
  isLike: any = false;
  set1: any = [];
  set2: any = [];
  
  constructor(private foodService: FoodItemService) {
    if (!localStorage.getItem('listFavoriteFood')) {
      localStorage.setItem('listFavoriteFood', JSON.stringify([]));
    }
  }

  ngOnInit(): void {
    let listFavorite: any = localStorage.getItem('listFavoriteFood');
    listFavorite = JSON.parse(listFavorite);
    this.isLike = listFavorite.find(
      (element: any) => element.itemid == this.item.itemid
    );

    this.item.brand = this.brandName != '' ? this.brandName : this.item.brand;
  }
  public toggleShowFoodItem() {
    // Nếu chưa có các biến lưu trữ các giá trị thì khởi tạo
    if (!localStorage.getItem('listSetMenuID')) {
      localStorage.setItem('listSetMenuID', JSON.stringify([]));
      localStorage.setItem('listSetMenu', JSON.stringify([]));
    }
    // lấy ra các biến trong local Storage
    let listSetMenuID: any = localStorage.getItem('listSetMenuID');
    let listSetMenu: any = localStorage.getItem('listSetMenu');
    // convert sang mảng để sử dụng
    listSetMenuID = JSON.parse(listSetMenuID);
    listSetMenu = JSON.parse(listSetMenu);
    // kiểm tra trong mảng có tồn tại id của món ăn này không
    const exist = listSetMenuID.includes(this.item.itemid);
    // Nếu không thì gọi API để lấy setMenu đó ra
    if (!exist) {
      this.foodService.setMenuGet(this.item.itemid).subscribe((detail: any) => {
        // Chuyển thành nạp dữ liệu để hiển thị
        this.setMenu = JSON.parse(detail.result);
        this.set1 = this.setMenu.Set1;
        this.set2 = this.setMenu.Set2;
        // Biến thành object để tiện cho việc find sau này
        let temp = { itemid: this.item.itemid, setMenu: this.setMenu };

        // Lưu vào mảng và bỏ vào Local
        listSetMenu.push(temp);
        listSetMenuID.push(this.item.itemid);
        localStorage.setItem('listSetMenu', JSON.stringify(listSetMenu));
        localStorage.setItem('listSetMenuID', JSON.stringify(listSetMenuID));
      });
    }
    // Nếu đã tồn tại thì tìm trong mảng
    else {
      let findSetMenu = listSetMenu.find(
        (item: any) => item.itemid == this.item.itemid
      );
      this.setMenu = findSetMenu.setMenu;
      this.set1 = this.setMenu.Set1;
      this.set2 = this.setMenu.Set2;
      console.log(this.setMenu);
    }
    this.showFoodItem = !this.showFoodItem;
  }

  public getStatusShow(value: any = false) {
    this.showFoodItem = value;
  }

  public favoriteFood() {
    // lấy ra danh sách những món ăn yêu thích
    let listFavorite: any = localStorage.getItem('listFavoriteFood');
    listFavorite = JSON.parse(listFavorite);
    // trường hợp đã thích
    if (this.isLike) {
      listFavorite = listFavorite.filter(
        (e: any) => e.itemid !== this.item.itemid
      );
      localStorage.setItem('listFavoriteFood', JSON.stringify(listFavorite));
      this.isLike = false;
    } else {
      listFavorite.push(this.item);
      localStorage.setItem('listFavoriteFood', JSON.stringify(listFavorite));
      this.isLike = true;
    }
  }
}
