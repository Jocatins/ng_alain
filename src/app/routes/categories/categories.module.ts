// system setup module

import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesCategoriesViewComponent } from './categories-view/categories-view.component';

const COMPONENTS: Array<Type<void>> = [CategoriesCategoriesViewComponent];

@NgModule({
  imports: [SharedModule, CategoriesRoutingModule],
  declarations: COMPONENTS
})
export class CategoriesModule {}
