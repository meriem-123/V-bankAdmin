import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyRoutingModule } from './currency-routing.module';
import { CurrencyFormComponent } from './currency-form/currency-form.component';
import { CurrencyItemComponent } from './currency-item/currency-item.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CurrencyFormComponent,
    CurrencyItemComponent,
    CurrencyListComponent,
  ],
  imports: [
    CommonModule,
    CurrencyRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    SharedModule,
  ],
})
export class CurrencyModule {}
