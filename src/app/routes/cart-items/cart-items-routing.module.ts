import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartItemsLogComponent } from './log/log.component';

const routes: Routes = [{ path: 'log', component: CartItemsLogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartItemsRoutingModule {}
