import { TranslateModule } from '@ngx-translate/core';
import { RestaurantItemModule } from '../../Components/restaurant-item/restaurant-item.module';
import { HeaderBackModule } from '../../Components/header-back/header-back.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectRestaurantRoutingModule } from './select-restaurant-routing.module';
import { SelectRestaurantComponent } from './select-restaurant.component';

@NgModule({
  declarations: [SelectRestaurantComponent],
  imports: [
    CommonModule,
    SelectRestaurantRoutingModule,
    HeaderBackModule,
    RestaurantItemModule,
    TranslateModule,
  ],
})
export class SelectRestaurantModule {}
