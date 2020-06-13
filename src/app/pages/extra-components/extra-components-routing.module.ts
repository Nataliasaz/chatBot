import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExtraComponentsComponent } from './extra-components.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [{
  path: '',
  component: ExtraComponentsComponent,
  children: [
    {
      path: 'chat',
      component: ChatComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtraComponentsRoutingModule {
}
