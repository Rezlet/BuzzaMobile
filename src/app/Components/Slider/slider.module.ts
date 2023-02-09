import { RouterModule } from '@angular/router';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { FlashSaleSliderComponent } from './slider-flash-sale/slider-flash-sale.component';
import { NewsSliderComponent } from './slider-news/slider-news.component';
import { FoodSliderComponent } from './slider-food/slider-food.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FoodSliderComponent,
    NewsSliderComponent,
    FlashSaleSliderComponent,
  ],
  imports: [CommonModule, TranslateModule, RouterModule],
  exports: [FoodSliderComponent, NewsSliderComponent, FlashSaleSliderComponent],
})
export class SliderModule {}
