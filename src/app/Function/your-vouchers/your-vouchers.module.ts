import { TranslateModule } from '@ngx-translate/core';
import { YourVoucherItemModule } from './../../Components/your-voucher-item/your-voucher-item.module';
import { PaymentPopupModule } from './../../Components/payment-popup/payment-popup.module';
import { HeaderBackModule } from './../../Components/header-back/header-back.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YourVouchersRoutingModule } from './your-vouchers-routing.module';
import { YourVouchersComponent } from './your-vouchers.component';


@NgModule({
  declarations: [
    YourVouchersComponent
  ],
  imports: [
    CommonModule,
    YourVouchersRoutingModule,
    HeaderBackModule,
    PaymentPopupModule,
    YourVoucherItemModule,
    TranslateModule
  ]
})
export class YourVouchersModule { }
