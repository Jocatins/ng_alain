import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { UpdateProductsRoutingModule } from './update-products-routing.module';
import { UpdateProductsService } from './update-products.service';
import { UpdateProductsUpdateComponent } from './update/update.component';

const COMPONENTS: Type<void>[] = [
  UpdateProductsUpdateComponent];

@NgModule({
  imports: [
    SharedModule,
    UpdateProductsRoutingModule
  ],
  declarations: COMPONENTS,
  providers: [
    UpdateProductsService
  ],
})
export class UpdateProductsModule { }
