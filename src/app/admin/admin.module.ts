import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import {AdminRoutingModule} from './admin-routing.module';
import {ThemeModule} from '../@themee/theme.module';
import {AdminComponent} from './admin.component';
import {AuthService} from '../pages/services/auth.service';
import {AuthGuard} from '../pages/services/auth.guard';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    AdminRoutingModule,
    ThemeModule,
    NbMenuModule,
  ],
  declarations: [
    AdminComponent,
  ],
  exports: [RouterModule],
  providers: [AuthService, AuthGuard],
})
export class AdminModule {
}
