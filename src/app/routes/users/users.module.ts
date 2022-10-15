import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';

import { UsersUsersListComponent } from './users-list/users-list.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from './users.service';

const COMPONENTS: Array<Type<void>> = [UsersUsersListComponent];

@NgModule({
  imports: [SharedModule, UsersRoutingModule],
  declarations: COMPONENTS,
  providers: [UsersService]
})
export class UsersModule {}
