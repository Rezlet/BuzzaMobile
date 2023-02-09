import { TranslateModule } from '@ngx-translate/core';
import { BookingLayoutModule } from './../../Components/booking-layout/booking-layout.module';
import { HeaderBackModule } from './../../Components/header-back/header-back.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailBookingRoutingModule } from './detail-booking-routing.module';
import { DetailBookingComponent } from './detail-booking.component';

@NgModule({
  declarations: [DetailBookingComponent],
  imports: [
    CommonModule,
    DetailBookingRoutingModule,
    HeaderBackModule,
    BookingLayoutModule,
    TranslateModule
  ],
})
export class DetailBookingModule {}
