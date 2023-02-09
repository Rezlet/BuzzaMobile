import { TranslateModule } from '@ngx-translate/core';
import { SwiperModule } from 'swiper/angular';
import { HeaderBackModule } from './../../Components/header-back/header-back.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RewardsRoutingModule } from './rewards-routing.module';
import { RewardsComponent } from './rewards.component';


@NgModule({
  declarations: [
    RewardsComponent
  ],
  imports: [
    CommonModule,
    RewardsRoutingModule,
    HeaderBackModule,
    SwiperModule,
    TranslateModule
  ]
})
export class RewardsModule { }
