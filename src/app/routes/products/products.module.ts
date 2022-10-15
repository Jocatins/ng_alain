import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';

import { ProductsProductListComponent } from './product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsService } from './products.service';

const COMPONENTS: Array<Type<void>> = [ProductsProductListComponent];

@NgModule({
  imports: [SharedModule, ProductsRoutingModule],
  declarations: COMPONENTS,
  providers: [ProductsService]
})
export class ProductsModule {}
