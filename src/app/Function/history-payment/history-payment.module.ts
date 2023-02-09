import { TranslateModule } from '@ngx-translate/core';
import { PaymentItemModule } from './../../Components/payment-item/payment-item.module';
import { AppointmentItemModule } from './../../Components/appointment-item/appointment-item.module';
import { SelectChangeModule } from './../../Components/select-change/select-change.module';
import { HeaderBackModule } from './../../Components/header-back/header-back.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryPaymentRoutingModule } from './history-payment-routing.module';
import { HistoryPaymentComponent } from './history-payment.component';

@NgModule({
  declarations: [HistoryPaymentComponent],
  imports: [
    CommonModule,
    HistoryPaymentRoutingModule,
    HeaderBackModule,
    SelectChangeModule,
    AppointmentItemModule,
    PaymentItemModule,
    TranslateModule
  ],
})
export class HistoryPaymentModule {}
