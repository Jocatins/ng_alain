import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsProductListComponent } from './product-list/product-list.component';

const routes: Routes = [{ path: 'productList', component: ProductsProductListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
