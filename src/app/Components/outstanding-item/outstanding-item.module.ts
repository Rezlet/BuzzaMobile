import { OutstandingItemComponent } from './outstanding-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [OutstandingItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    OutstandingItemComponent
  ]
})
export class OutstandingItemModule { }
