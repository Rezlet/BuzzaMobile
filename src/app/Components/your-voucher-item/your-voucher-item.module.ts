import { RouterModule } from '@angular/router';
import { YourVoucherItemComponent } from './your-voucher-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [YourVoucherItemComponent],
  imports: [CommonModule, RouterModule],
  exports: [YourVoucherItemComponent],
})
export class YourVoucherItemModule {}
