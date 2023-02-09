import { TranslateModule } from '@ngx-translate/core';
import { HeaderBackModule } from './../../Components/header-back/header-back.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';

@NgModule({
  declarations: [SettingComponent],
  imports: [CommonModule, SettingRoutingModule, HeaderBackModule, TranslateModule],
})
export class SettingModule {}
