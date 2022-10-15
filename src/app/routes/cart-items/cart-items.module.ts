import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';

import { CartItemsRoutingModule } from './cart-items-routing.module';
import { CartItemsLogComponent } from './log/log.component';

const COMPONENTS: Array<Type<void>> = [CartItemsLogComponent];

@NgModule({
  imports: [SharedModule, CartItemsRoutingModule],
  declarations: COMPONENTS
})
export class CartItemsModule {}
