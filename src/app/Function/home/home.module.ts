import { PaymentPopupModule } from './../../Components/payment-popup/payment-popup.module';
import { HomeRoutingModule } from './home-routing.module';
import { FoodItemModule } from '../../Components/food-item/food-item.module';
import { HeaderBackModule } from '../../Components/header-back/header-back.module';
import { FoodItemSpecialModule } from '../../Components/food-item-special/food-item-special.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderBackModule,
    PaymentPopupModule
  ]
})
export class HomeModule { }
