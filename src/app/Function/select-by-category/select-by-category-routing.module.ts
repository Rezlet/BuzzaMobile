import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectByCategoryComponent } from './select-by-category.component';

const routes: Routes = [{ path: '', component: SelectByCategoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectByCategoryRoutingModule { }
