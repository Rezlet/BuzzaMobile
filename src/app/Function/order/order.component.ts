import { fadeInOut } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: [],
  animations: [fadeInOut],
})
export class OrderComponent implements OnInit {
  listBrands: any = [];

  constructor() {}

  ngOnInit(): void {
    const data: any = localStorage.getItem('branches');
    this.listBrands = JSON.parse(data);
    console.log(this.listBrands)
  }
}
