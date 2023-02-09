import { TranslateModule } from '@ngx-translate/core';
import { HeaderBackModule } from './../../Components/header-back/header-back.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileEditRoutingModule } from './profile-edit-routing.module';
import { ProfileEditComponent } from './profile-edit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileEditComponent
  ],
  imports: [
    CommonModule,
    ProfileEditRoutingModule,
    HeaderBackModule,
    TranslateModule,
    FormsModule,
  ]
})
export class ProfileEditModule { }
