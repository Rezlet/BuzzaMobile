import { TranslateModule } from '@ngx-translate/core';
import { SelectChangeModule } from './../../Components/select-change/select-change.module';
import { VoucherItemModule } from './../../Components/voucher-item/voucher-item.module';
import { HeaderBackModule } from './../../Components/header-back/header-back.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoucherRoutingModule } from './voucher-routing.module';
import { VoucherComponent } from './voucher.component';


@NgModule({
  declarations: [
    VoucherComponent
  ],
  imports: [
    CommonModule,
    VoucherRoutingModule,
    HeaderBackModule,
    VoucherItemModule,
    SelectChangeModule,
    TranslateModule
  ]
})
export class VoucherModule { }
 