
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import {NbAuthJWTToken, NbAuthModule, NbOAuth2AuthStrategy, NbPasswordAuthStrategy} from '@nebular/auth';
import { NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule } from '@nebular/theme';

import { LoginComponent } from './login/login.component';
import {AuthService} from '../pages/services/auth.service';
import {SharedModule} from '../pages/shared.module';
import { LoyoutComponent } from './loyout/loyout.component';
import {AuthGuard} from "../pages/services/auth.guard";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbButtonModule,
    SharedModule,
    NbInputModule,
    AuthRoutingModule,
    NbAuthModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginComponent,
    LoyoutComponent,
  ],
  providers: [AuthService, AuthGuard],
})
export class AuthModule {
}
