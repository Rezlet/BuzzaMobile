import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OTPRoutingModule } from './otp-routing.module';
import { OTPComponent } from './otp.component';
import { HeaderBackModule } from 'src/app/Components/header-back/header-back.module';


@NgModule({
  declarations: [
    OTPComponent
  ],
  imports: [
    CommonModule,
    OTPRoutingModule,
    NgOtpInputModule,
    HeaderBackModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class OTPModule { }
