import { fadeInOut } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-by-category',
  templateUrl: './select-by-category.component.html',
  styleUrls: [],
  animations: [fadeInOut]
})
export class SelectByCategoryComponent implements OnInit {
  title: any = 'Pizza';
  listFavourites = [
    {
      src: 'assets/Images/favourite-food.png',
      title: 'Beef BBQ Pizza',
      stock: 'Topping  mật ong, phô mai',
      price: '299,000',
    },
    {
      src: 'assets/Images/favourite-food.png',
      title: 'Beef BBQ Pizzaa',
      stock: 'Topping  mật ong, phô mai',
      price: '299,000',
    },
    {
      src: 'assets/Images/favourite-food.png',
      title: 'Beef BBQ Pizzaaa',
      stock: 'Topping  mật ong, phô mai',
      price: '299,000',
    },
    {
      src: 'assets/Images/favourite-food.png',
      title: 'Beef BBQ Pizzaa',
      stock: 'Topping  mật ong, phô mai',
      price: '299,000',
    },
    {
      src: 'assets/Images/favourite-food.png',
      title: 'Beef BBQ Pizzaaa',
      stock: 'Topping  mật ong, phô mai',
      price: '299,000',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
