import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {AdminComponent} from './admin.component';
import {AuthGuard} from '../pages/services/auth.guard';
import {AuthService} from '../pages/services/auth.service';


const routes: Routes = [{
  // path: '',
  // component: AdminComponent,
  // children: [
  //   {
  //     path: 'charts',
  //     loadChildren: () => import('./charts/charts.module')
  //       .then(m => m.ChartsModule),
  //   },
  //   {
  //     path: 'tables',
  //     loadChildren: () => import('./tables/tables.module')
  //       .then(m => m.TablesModule),
  //   },
  //   {
  //     path: '',
  //     redirectTo: 'charts',
  //     pathMatch: 'full',
  //   },
  //   ],
  path: '',
  component: AdminComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: '',
      redirectTo: 'charts',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthService, AuthGuard],
})
export class AdminRoutingModule {
}
