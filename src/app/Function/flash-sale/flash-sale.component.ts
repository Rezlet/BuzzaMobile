import { fadeInOut } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flash-sale',
  templateUrl: './flash-sale.component.html',
  styleUrls: [],
  animations: [fadeInOut],
})
export class FlashSaleComponent implements OnInit {
  //#region  fake data
  listItems: any = [];
  categories = [
    { title: 'Buzza Pizza', value: 'buzza' },
    { title: 'Korean Grill', value: 'grill' },
    { title: 'Sushi In Sushi', value: 'sushi' },
  ];

  //#endregion
  items: any;
  constructor() {
    this.listItems = localStorage.getItem('flashSale-5') 
    this.listItems = JSON.parse(this.listItems)
    this.items = this.listItems
  }
  ngOnInit(): void {}

  public getValueItems(value: string = this.categories[0].value) {
    // this.items = this.listItems.filter((obj) => obj.categoryValue == value);
    // return this.items;
  }
}
