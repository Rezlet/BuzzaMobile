import { MethodPaymentModule } from './../../Components/method-payment/method-payment.module';
import { TranslateModule } from '@ngx-translate/core';
import { SuccessLayoutModule } from './../../Components/success-layout/success-layout.module';
import { SharedModule } from './../../Shared/shared.module';
import { VoucherItemModule } from './../../Components/voucher-item/voucher-item.module';
import { SwiperModule } from 'swiper/angular';
import { HeaderBackModule } from './../../Components/header-back/header-back.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmOrderRoutingModule } from './confirm-order-routing.module';
import { ConfirmOrderComponent } from './confirm-order.component';

@NgModule({
  declarations: [ConfirmOrderComponent],
  imports: [
    CommonModule,
    ConfirmOrderRoutingModule,
    HeaderBackModule,
    SwiperModule,
    VoucherItemModule,
    SharedModule,
    SuccessLayoutModule,
    TranslateModule,
    MethodPaymentModule
  ],
  providers: [SwiperModule],
})
export class ConfirmOrderModule {}
