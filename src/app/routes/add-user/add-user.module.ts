import { NgModule, Type } from '@angular/core';
import { G2BarModule } from '@delon/chart/bar';
import { G2CardModule } from '@delon/chart/card';
import { SharedModule } from '@shared';

import { AddUserRoutingModule } from './add-user-routing.module';
import { AddUserService } from './add-user.service';
import { AddUserLogComponent } from './log/log.component';

const COMPONENTS: Array<Type<void>> = [AddUserLogComponent];

@NgModule({
  imports: [SharedModule, AddUserRoutingModule, G2CardModule, G2BarModule],
  declarations: COMPONENTS,
  providers: [AddUserService],
  exports: [G2CardModule, G2BarModule]
})
export class AddUserModule {}
