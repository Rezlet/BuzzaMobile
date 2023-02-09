import { TranslateModule } from '@ngx-translate/core';
import { FooterModule } from './../../Components/footer/footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FooterModule,
    TranslateModule
  ]
})
export class ProfileModule { }
