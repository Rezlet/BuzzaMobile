import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-food-item-special',
  templateUrl: './food-item-special.component.html',
  styleUrls: []
})
export class FoodItemSpecialComponent implements OnInit {

  @Input() item: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
