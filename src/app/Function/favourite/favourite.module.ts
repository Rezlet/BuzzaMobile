import { TranslateModule } from '@ngx-translate/core';
import { FoodItemModule } from './../../Components/food-item/food-item.module';
import { HeaderBackModule } from './../../Components/header-back/header-back.module';
import { FoodItemSpecialModule } from './../../Components/food-item-special/food-item-special.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouriteRoutingModule } from './favourite-routing.module';
import { FavouriteComponent } from './favourite.component';


@NgModule({
  declarations: [
    FavouriteComponent
  ],
  imports: [
    CommonModule,
    FavouriteRoutingModule,
    HeaderBackModule,
    FoodItemSpecialModule,
    FoodItemModule,
    TranslateModule
  ]
})
export class FavouriteModule { }
