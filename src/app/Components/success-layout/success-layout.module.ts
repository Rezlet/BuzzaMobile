import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuccessLayoutComponent } from './success-layout.component';

@NgModule({
  declarations: [SuccessLayoutComponent],
  imports: [CommonModule,RouterModule,TranslateModule],
  exports: [SuccessLayoutComponent],
})
export class SuccessLayoutModule {}
