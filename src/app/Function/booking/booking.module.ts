import { TranslateModule } from '@ngx-translate/core';
import { FooterModule } from './../../Components/footer/footer.module';
import { RestaurantItemModule } from './../../Components/restaurant-item/restaurant-item.module';
import { SelectChangeModule } from './../../Components/select-change/select-change.module';
import { HeaderBackModule } from './../../Components/header-back/header-back.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';

@NgModule({
  declarations: [BookingComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    HeaderBackModule,
    SelectChangeModule,
    RestaurantItemModule,
    FooterModule,
    TranslateModule,
  ],
})
export class BookingModule {}
