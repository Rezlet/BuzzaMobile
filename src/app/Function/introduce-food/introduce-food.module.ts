import { DealSpecialModule } from './../../Components/deal-special/deal-special.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroduceFoodRoutingModule } from './introduce-food-routing.module';
import { IntroduceFoodComponent } from './introduce-food.component';


@NgModule({
  declarations: [
    IntroduceFoodComponent
  ],
  imports: [
    CommonModule,
    IntroduceFoodRoutingModule,
    TranslateModule,
    DealSpecialModule,
    TranslateModule
  ]
})
export class IntroduceFoodModule { }
