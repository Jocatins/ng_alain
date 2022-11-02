import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateProductsUpdateComponent } from './update/update.component';

const routes: Routes = [

  { path: 'update', component: UpdateProductsUpdateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateProductsRoutingModule { }
