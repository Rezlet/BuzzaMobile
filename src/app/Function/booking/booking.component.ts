import { fadeInOut } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: [],
  animations: [fadeInOut],
})
export class BookingComponent implements OnInit {
  listShow: any = [];
  brandID: any;
  categories: any = [];
  brandName: any;
  items: any = [];
  constructor() {
    let branches: any = localStorage.getItem('branches');
    if (branches != null) branches = JSON.parse(branches);
    branches.forEach((element: any) => {
      // thêm các nhà hàng của chi nhánh vào 1 mảng để dễ show ra
      const temp: any = localStorage.getItem(element.BrandID);
      this.listShow[element.BrandID] = JSON.parse(temp);
      let category: any = {};
      category.title = element.BrandName;
      category.value = element.BrandID;
      this.categories.push(category);
    });
    this.items = this.getValueItems(this.categories[0].BrandID);
  }


  // dùng để thay đổi hiển thi của nhà hàng 
  public getValueItems(brandID: any = this.categories[0].value) {
    this.brandID = brandID;
    this.items = this.listShow[brandID];
    let category = this.categories.find(
      (element: any) => element.value == brandID
    );
    this.brandName = category.title;
    return this.listShow[brandID];
  }
  ngOnInit(): void {}
}
