import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroduceFoodComponent } from './introduce-food.component';

const routes: Routes = [{ path: '', component: IntroduceFoodComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroduceFoodRoutingModule { }
