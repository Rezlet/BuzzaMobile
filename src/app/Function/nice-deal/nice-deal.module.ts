import { TranslateModule } from '@ngx-translate/core';
import { DealSpecialModule } from './../../Components/deal-special/deal-special.module';
import { HeaderBackModule } from './../../Components/header-back/header-back.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NiceDealRoutingModule } from './nice-deal-routing.module';
import { NiceDealComponent } from './nice-deal.component';

@NgModule({
  declarations: [NiceDealComponent],
  imports: [
    CommonModule,
    NiceDealRoutingModule,
    HeaderBackModule,
    DealSpecialModule,
    TranslateModule
  ],
})
export class NiceDealModule {}
