import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersUsersListComponent } from './users-list/users-list.component';

const routes: Routes = [{ path: 'users-list', component: UsersUsersListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
