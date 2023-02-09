import { fadeInOut } from './../../Services/animation';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: [],
  animations: [fadeInOut],
})
export class RestaurantItemComponent implements OnInit {
  @Input() item: any;
  @Input() brandName: any = '';
  @Input() brandID: any;
  @Input() isBooking: any = true;

  constructor() {
  }

  ngOnInit(): void {
    this.brandName = this.brandName.toLowerCase();
  }
}
