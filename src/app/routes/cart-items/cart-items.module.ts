import { NgModule, Type } from '@angular/core';
import { G2BarModule } from '@delon/chart/bar';
import { SharedModule } from '@shared';

import { CartItemsRoutingModule } from './cart-items-routing.module';
import { CartItemsChartComponent } from './chart/chart.component';
import { CartItemsLogComponent } from './log/log.component';

const COMPONENTS: Array<Type<void>> = [CartItemsLogComponent, CartItemsChartComponent];

@NgModule({
  imports: [SharedModule, CartItemsRoutingModule, G2BarModule],
  exports: [G2BarModule],
  declarations: COMPONENTS
})
export class CartItemsModule {}
