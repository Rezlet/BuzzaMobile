import { fadeInOut } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: [],
  animations: [fadeInOut],
})
export class FavouriteComponent implements OnInit {
  listFavourites: any = [];
  constructor() {
    // món ăn yêu thích được lưu trong localStore
    this.listFavourites = localStorage.getItem('listFavoriteFood');
    this.listFavourites = JSON.parse(this.listFavourites);
  }

  ngOnInit(): void {}
}
