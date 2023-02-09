import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputAddressComponent } from './input-address.component';

const routes: Routes = [{ path: '', component: InputAddressComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputAddressRoutingModule { }
