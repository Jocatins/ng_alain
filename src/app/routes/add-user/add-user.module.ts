import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';

import { AddUserRoutingModule } from './add-user-routing.module';
import { AddUserService } from './add-user.service';
import { AddUserLogComponent } from './log/log.component';

const COMPONENTS: Array<Type<void>> = [AddUserLogComponent];

@NgModule({
  imports: [SharedModule, AddUserRoutingModule],
  declarations: COMPONENTS,
  providers: [AddUserService]
})
export class AddUserModule {}
