import { TranslateModule } from '@ngx-translate/core';
import { SwiperModule } from 'swiper/angular';
import { FoodItemModule } from './../../Components/food-item/food-item.module';
import { SelectChangeModule } from './../../Components/select-change/select-change.module';
import { HeaderBackModule } from './../../Components/header-back/header-back.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuTotalRoutingModule } from './menu-total-routing.module';
import { MenuTotalComponent } from './menu-total.component';


@NgModule({
  declarations: [
    MenuTotalComponent
  ],
  imports: [
    CommonModule,
    MenuTotalRoutingModule,
    HeaderBackModule,
    SelectChangeModule,
    FoodItemModule,
    SwiperModule,
    TranslateModule
  ]
})
export class MenuTotalModule { }
