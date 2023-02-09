import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NiceDealComponent } from './nice-deal.component';

const routes: Routes = [{ path: '', component: NiceDealComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NiceDealRoutingModule { }
