import { RatingPopupModule } from './../rating-popup/rating-popup.module';
import { RatingModule } from 'ngx-bootstrap/rating';
import { SuccessLayoutModule } from './../success-layout/success-layout.module';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from './footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';


@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    NgxScannerQrcodeModule,
    SuccessLayoutModule,
    RatingPopupModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
