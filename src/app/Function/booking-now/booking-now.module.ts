import { TranslateModule } from '@ngx-translate/core';
import { RestaurantItemModule } from './../../Components/restaurant-item/restaurant-item.module';
import { HeaderBackModule } from './../../Components/header-back/header-back.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingNowRoutingModule } from './booking-now-routing.module';
import { BookingNowComponent } from './booking-now.component';


@NgModule({
  declarations: [
    BookingNowComponent
  ],
  imports: [
    CommonModule,
    BookingNowRoutingModule,
    HeaderBackModule,
    RestaurantItemModule,
    TranslateModule
  ]
})
export class BookingNowModule { }
