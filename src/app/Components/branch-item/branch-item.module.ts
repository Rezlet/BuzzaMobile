import { TranslateModule } from '@ngx-translate/core';
import { BookingLayoutModule } from './../booking-layout/booking-layout.module';
import { BranchItemComponent } from './branch-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BranchItemComponent],
  imports: [CommonModule , BookingLayoutModule, TranslateModule],
  exports: [BranchItemComponent],
})
export class BranchItemModule {}
