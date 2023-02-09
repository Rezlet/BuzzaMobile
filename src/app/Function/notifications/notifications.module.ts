import { TranslateModule } from '@ngx-translate/core';
import { FooterModule } from './../../Components/footer/footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './notifications.component';


@NgModule({
  declarations: [
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    FooterModule,
    TranslateModule
  ]
})
export class NotificationsModule { }
