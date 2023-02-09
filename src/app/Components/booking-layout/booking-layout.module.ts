import { TranslateModule } from '@ngx-translate/core';
import { SuccessLayoutModule } from './../success-layout/success-layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingLayoutComponent } from './booking-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BookingLayoutComponent],
  imports: [CommonModule, FormsModule,SuccessLayoutModule, TranslateModule],
  exports: [BookingLayoutComponent],
})
export class BookingLayoutModule {}
