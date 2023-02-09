import { FoodItemSpecialModule } from './../../Components/food-item-special/food-item-special.module';
import { HeaderBackModule } from './../../Components/header-back/header-back.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectByCategoryRoutingModule } from './select-by-category-routing.module';
import { SelectByCategoryComponent } from './select-by-category.component';


@NgModule({
  declarations: [
    SelectByCategoryComponent
  ],
  imports: [
    CommonModule,
    SelectByCategoryRoutingModule,
    HeaderBackModule,
    FoodItemSpecialModule
  ]
})
export class SelectByCategoryModule { }
