import { RestaurantItemComponent } from './restaurant-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RestaurantItemComponent],
  imports: [CommonModule, RouterModule],
  exports: [RestaurantItemComponent],
})
export class RestaurantItemModule {}
