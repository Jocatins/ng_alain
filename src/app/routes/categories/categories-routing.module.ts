// system setup module routing Configuration file.

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriesCategoriesViewComponent } from './categories-view/categories-view.component';

const routes: Routes = [{ path: 'categories-view', component: CategoriesCategoriesViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule {}
