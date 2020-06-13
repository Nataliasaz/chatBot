import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import {AppCounterService} from './pages/extra-components/chat/services/app-counter.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from './pages/shared.module';
import {SmartTableDatepickerComponent , SmartTableDatepickerRenderComponent} from './do-b/do-b.component';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';

@NgModule({
  declarations: [AppComponent, SmartTableDatepickerComponent , SmartTableDatepickerRenderComponent],
  imports: [
    BrowserModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    ThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
  ],
  entryComponents: [
    SmartTableDatepickerComponent ,
    SmartTableDatepickerRenderComponent,
  ],
  providers: [
    AppCounterService,
    SmartTableDatepickerRenderComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
