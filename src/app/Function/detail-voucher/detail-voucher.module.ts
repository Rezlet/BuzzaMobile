import { ChangePointItemModule } from './../../Components/change-point-item/change-point-item.module';
import { VoucherItemModule } from './../../Components/voucher-item/voucher-item.module';
import { HeaderBackModule } from './../../Components/header-back/header-back.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailVoucherRoutingModule } from './detail-voucher-routing.module';
import { DetailVoucherComponent } from './detail-voucher.component';

@NgModule({
  declarations: [DetailVoucherComponent],
  imports: [CommonModule, DetailVoucherRoutingModule, HeaderBackModule, ChangePointItemModule],
})
export class DetailVoucherModule {}
