import { HeaderBackModule } from './../../Components/header-back/header-back.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterForCodeRoutingModule } from './register-for-code-routing.module';
import { RegisterForCodeComponent } from './register-for-code.component';


@NgModule({
  declarations: [
    RegisterForCodeComponent
  ],
  imports: [
    CommonModule,
    RegisterForCodeRoutingModule,
    HeaderBackModule
  ]
})
export class RegisterForCodeModule { }
