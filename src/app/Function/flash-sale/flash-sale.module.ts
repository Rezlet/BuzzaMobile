import { TranslateModule } from '@ngx-translate/core';
import { SelectChangeModule } from './../../Components/select-change/select-change.module';
import { HeaderBackModule } from './../../Components/header-back/header-back.module';
import { FoodItemModule } from './../../Components/food-item/food-item.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlashSaleRoutingModule } from './flash-sale-routing.module';
import { FlashSaleComponent } from './flash-sale.component';

@NgModule({
  declarations: [FlashSaleComponent],
  imports: [
    CommonModule,
    FlashSaleRoutingModule,
    FoodItemModule,
    HeaderBackModule,
    SelectChangeModule,
    TranslateModule
  ],
})
export class FlashSaleModule {}
