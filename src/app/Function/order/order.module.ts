import { SwiperModule } from 'swiper/angular';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderBackModule } from './../../Components/header-back/header-back.module';
import { FooterModule } from './../../Components/footer/footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';


@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FooterModule,
    HeaderBackModule,
    TranslateModule,
  ]
})
export class OrderModule { }
