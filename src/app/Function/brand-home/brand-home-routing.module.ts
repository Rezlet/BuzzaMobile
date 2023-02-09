import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandHomeComponent } from './brand-home.component';

const routes: Routes = [{ path: '', component: BrandHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandHomeRoutingModule { }
