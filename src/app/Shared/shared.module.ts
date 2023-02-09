import { MycurrencyPipe } from './../Custom/custom.currencypipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [MycurrencyPipe],
  imports: [
    CommonModule
  ],
  exports: [MycurrencyPipe]
})
export class SharedModule { }
