import { TranslateModule } from '@ngx-translate/core';
import { HeaderBackModule } from './../../Components/header-back/header-back.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputAddressRoutingModule } from './input-address-routing.module';
import { InputAddressComponent } from './input-address.component';


@NgModule({
  declarations: [
    InputAddressComponent
  ],
  imports: [
    CommonModule,
    InputAddressRoutingModule,
    HeaderBackModule,
    TranslateModule
  ]
})
export class InputAddressModule { }
