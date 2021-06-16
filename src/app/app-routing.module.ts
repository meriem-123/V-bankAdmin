import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { CurrencyFormComponent } from './currency/currency-form/currency-form.component';
import { CurrencyListComponent } from './currency/currency-list/currency-list.component';
import { AgentListComponent } from './agent/agent-list/agent-list.component';
import { AgentFormComponent } from './agent/agent-form/agent-form.component';
import { AgencyListComponent } from './agency/agency-list/agency-list.component';
import { AgencyFormComponent } from './agency/agency-form/agency-form.component';
import { AdminFormComponent } from './admin/admin-form/admin-form.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { CurrencyItemComponent } from './currency/currency-item/currency-item.component';
import { AgencyItemComponent } from './agency/agency-item/agency-item.component';
import { AgentItemComponent } from './agent/agent-item/agent-item.component';
import { LoginComponent } from './authentification/components/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'overview',
    component: NavigationComponent,
    children: [
      {
        path: 'currencyList',
        component: CurrencyListComponent,
      },
      {
        path: 'currencyForm',
        component: CurrencyFormComponent,
      },
      {
        path: 'currencyItem/:id',
        component: CurrencyItemComponent,
      },

      {
        path: 'agency/:id/agentList',
        component: AgentListComponent,
      },
      {
        path: 'agency/:id/agents/:id2',
        component: AgentItemComponent,
      },
      {
        path: 'agency/:id/agentForm',
        component: AgentFormComponent,
      },
      {
        path: 'agencyList',
        component: AgencyListComponent,
      },
      {
        path: 'agencyForm',
        component: AgencyFormComponent,
      },
      {
        path: 'agencyItem/:id',
        component: AgencyItemComponent,
      },
      {
        path: 'adminList',
        component: AdminListComponent,
      },
      {
        path: 'adminForm',
        component: AdminFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
