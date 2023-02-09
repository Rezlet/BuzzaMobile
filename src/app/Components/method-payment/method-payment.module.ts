import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MethodPaymentComponent } from './method-payment.component';

@NgModule({
  declarations: [MethodPaymentComponent],
  imports: [CommonModule, FormsModule, TranslateModule],
  exports: [MethodPaymentComponent]
})
export class MethodPaymentModule {}
