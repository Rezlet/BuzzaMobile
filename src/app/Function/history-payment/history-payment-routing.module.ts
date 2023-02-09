import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryPaymentComponent } from './history-payment.component';

const routes: Routes = [{ path: '', component: HistoryPaymentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryPaymentRoutingModule { }
