import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingNowComponent } from './booking-now.component';

const routes: Routes = [{ path: '', component: BookingNowComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingNowRoutingModule { }
