import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectRestaurantComponent } from './select-restaurant.component';

const routes: Routes = [{ path: '', component: SelectRestaurantComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectRestaurantRoutingModule { }
