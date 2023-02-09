import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterForCodeComponent } from './register-for-code.component';

const routes: Routes = [{ path: '', component: RegisterForCodeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterForCodeRoutingModule { }
