import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbAlertModule,
  NbButtonModule,
  NbCalendarKitModule,
  NbCalendarModule,
  NbCalendarRangeModule,
  NbCardModule,
  NbChatModule,
  NbIconModule,
  NbProgressBarModule,
  NbSelectModule,
  NbSpinnerModule,
  NbTabsetModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { ExtraComponentsRoutingModule } from './extra-components-routing.module';

// components
import { ExtraComponentsComponent } from './extra-components.component';
import { ChatComponent } from './chat/chat.component';
import { AppCounterComponent } from './chat/services/app-counter.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

const COMPONENTS = [
  ExtraComponentsComponent,
  ChatComponent,
];

const MODULES = [
  NbAlertModule,
  NbActionsModule,
  NbButtonModule,
  NbCalendarModule,
  NbCalendarKitModule,
  NbCalendarRangeModule,
  NbCardModule,
  NbChatModule,
  NbIconModule,
  NbProgressBarModule,
  NbSelectModule,
  NbSpinnerModule,
  NbTabsetModule,
  ThemeModule,
  ExtraComponentsRoutingModule,
];

@NgModule({
  imports: [
    ...MODULES,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [
    ...COMPONENTS,
    AppCounterComponent,
  ],
})
export class ExtraComponentsModule { }
