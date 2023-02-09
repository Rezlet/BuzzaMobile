import { TranslateModule } from '@ngx-translate/core';
import { BookingLayoutModule } from './../booking-layout/booking-layout.module';
import { AppointmentItemComponent } from './appointment-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppointmentItemComponent],
  imports: [CommonModule, BookingLayoutModule, TranslateModule],
  exports: [AppointmentItemComponent],
})
export class AppointmentItemModule {}
