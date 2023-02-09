import { MycurrencyPipe } from './../../Custom/custom.currencypipe';
import { OrderLayoutComponent } from './../order-layout/order-layout.component';
import { OrderLayoutModule } from './../order-layout/order-layout.module';
import { FoodItemComponent } from './food-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/Shared/shared.module';

@NgModule({
  declarations: [FoodItemComponent],
  imports: [CommonModule, OrderLayoutModule,SharedModule],
  exports: [FoodItemComponent],
})
export class FoodItemModule {}
 