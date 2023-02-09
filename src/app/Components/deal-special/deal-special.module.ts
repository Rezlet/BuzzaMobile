import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { DealSpecialComponent } from './deal-special.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [DealSpecialComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    DealSpecialComponent
  ]
})
export class DealSpecialModule { }
