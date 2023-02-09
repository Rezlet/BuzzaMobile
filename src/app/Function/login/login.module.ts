import { TranslateModule } from '@ngx-translate/core';
import { HeaderBackModule } from './../../Components/header-back/header-back.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOtpInputModule } from 'ng-otp-input';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    HeaderBackModule,
    NgOtpInputModule,
    ReactiveFormsModule,
    TranslateModule
  ],
})
export class LoginModule {}
