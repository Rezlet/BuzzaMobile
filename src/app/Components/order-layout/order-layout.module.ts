import { TranslateModule } from '@ngx-translate/core';
import { SuccessLayoutModule } from './../success-layout/success-layout.module';
import { SharedModule } from './../../Shared/shared.module';
import { PaymentPopupModule } from './../payment-popup/payment-popup.module';
import { RatingModule } from 'ngx-bootstrap/rating';
import { OrderLayoutComponent } from './order-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [OrderLayoutComponent],
  imports: [
    CommonModule,
    RatingModule,
    SharedModule,
    SuccessLayoutModule,
    TranslateModule,
    SharedModule,
  ],
  exports: [OrderLayoutComponent],
})
export class OrderLayoutModule {}
