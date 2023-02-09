import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderBackComponent } from './header-back.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentPopupModule } from '../payment-popup/payment-popup.module';

@NgModule({
  declarations: [HeaderBackComponent],
  imports: [CommonModule, TranslateModule, PaymentPopupModule, RouterModule],
  exports: [HeaderBackComponent],
})
export class HeaderBackModule {}
