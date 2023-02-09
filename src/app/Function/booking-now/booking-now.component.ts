import { fadeInOut } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-now',
  templateUrl: './booking-now.component.html',
  styleUrls: [],
  animations: [fadeInOut],
})
export class BookingNowComponent implements OnInit {
  listBrand: any;

  constructor() {
    const listBrand: any = localStorage.getItem('branches');
    this.listBrand = JSON.parse(listBrand);
    this.listBrand.forEach((brand: any) => {
      const businessItem: any = localStorage.getItem(brand.BrandID);
      brand.businessItem = JSON.parse(businessItem);
    });
  }

  ngOnInit(): void {}
}
