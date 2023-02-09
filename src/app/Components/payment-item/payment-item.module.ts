import { RouterModule } from '@angular/router';
import { SharedModule } from './../../Shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { PaymentItemComponent } from './payment-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [PaymentItemComponent],
  imports: [
    CommonModule, 
    TranslateModule,
    SharedModule,
    RouterModule
  ], 
  exports: [
    PaymentItemComponent
  ]
})
export class PaymentItemModule { }
