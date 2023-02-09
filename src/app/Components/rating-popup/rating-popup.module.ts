import { TranslateModule } from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingPopupComponent } from './rating-popup.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
@NgModule({
  declarations: [RatingPopupComponent],
  imports: [
    CommonModule,
    NgxStarRatingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: [RatingPopupComponent],
})
export class RatingPopupModule {}
