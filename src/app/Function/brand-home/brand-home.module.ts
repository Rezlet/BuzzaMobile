import { FormsModule } from '@angular/forms';
import { YourVoucherItemModule } from './../../Components/your-voucher-item/your-voucher-item.module';
import { TranslateModule } from '@ngx-translate/core';
import { OutstandingItemModule } from './../../Components/outstanding-item/outstanding-item.module';
import { BranchItemModule } from './../../Components/branch-item/branch-item.module';
import { DealSpecialModule } from './../../Components/deal-special/deal-special.module';
import { AppRoutingModule } from './../../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FooterModule } from './../../Components/footer/footer.module';
import { SliderModule } from './../../Components/Slider/slider.module';
import { SwiperModule } from 'swiper/angular';
import { HeaderBackModule } from './../../Components/header-back/header-back.module';
import { SelectChangeModule } from './../../Components/select-change/select-change.module';
import { FoodItemModule } from './../../Components/food-item/food-item.module';
import { ChangePointItemModule } from './../../Components/change-point-item/change-point-item.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandHomeRoutingModule } from './brand-home-routing.module';
import { BrandHomeComponent } from './brand-home.component';

@NgModule({
  declarations: [BrandHomeComponent],
  imports: [
    CommonModule,
    BrandHomeRoutingModule,
    ChangePointItemModule,
    FoodItemModule,
    SelectChangeModule,
    HeaderBackModule,
    SwiperModule,
    DealSpecialModule,
    BranchItemModule,
    FormsModule,
    OutstandingItemModule,
    TranslateModule,
    YourVoucherItemModule
  ],
  providers: [
    SliderModule,
    BrowserModule,
    AppRoutingModule,
    FooterModule,
    SwiperModule,
  ],
})
export class BrandHomeModule {}
