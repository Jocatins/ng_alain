import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddUserLogComponent } from './log/log.component';

const routes: Routes = [{ path: 'log', component: AddUserLogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddUserRoutingModule {}
