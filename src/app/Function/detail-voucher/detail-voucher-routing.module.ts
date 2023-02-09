import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailVoucherComponent } from './detail-voucher.component';

const routes: Routes = [{ path: '', component: DetailVoucherComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailVoucherRoutingModule { }
