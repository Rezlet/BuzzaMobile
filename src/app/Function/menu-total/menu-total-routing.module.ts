import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuTotalComponent } from './menu-total.component';

const routes: Routes = [{ path: '', component: MenuTotalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuTotalRoutingModule { }
