import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YourVouchersComponent } from './your-vouchers.component';

const routes: Routes = [{ path: '', component: YourVouchersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YourVouchersRoutingModule { }
