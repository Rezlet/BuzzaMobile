import { RouterModule } from '@angular/router';
import { ChangePointItemComponent } from './change-point-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ChangePointItemComponent],
  imports: [CommonModule, RouterModule],
  exports: [ChangePointItemComponent],
})
export class ChangePointItemModule {}
