import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminFormComponent } from './admin-form/admin-form.component';

@NgModule({
  declarations: [AdminListComponent, AdminFormComponent],
  imports: [AdminRoutingModule, SharedModule],
})
export class AdminModule {}
