import { TranslateModule } from '@ngx-translate/core';
import { OrderLayoutModule } from './../order-layout/order-layout.module';
import { SharedModule } from './../../Shared/shared.module';
import { RouterModule } from '@angular/router';
import { SelectChangeModule } from '../select-change/select-change.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentPopupComponent } from './payment-popup.component';

@NgModule({
  declarations: [PaymentPopupComponent],
  imports: [
    CommonModule,
    SelectChangeModule,
    RouterModule,
    SharedModule,
    TranslateModule,
    OrderLayoutModule
  ],
  exports: [PaymentPopupComponent],
})
export class PaymentPopupModule {}
