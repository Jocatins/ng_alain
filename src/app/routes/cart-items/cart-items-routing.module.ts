import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartItemsChartComponent } from './chart/chart.component';
import { CartItemsLogComponent } from './log/log.component';

const routes: Routes = [
  { path: 'log', component: CartItemsLogComponent },
  { path: 'chart', component: CartItemsChartComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartItemsRoutingModule {}
