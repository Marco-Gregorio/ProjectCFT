import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesocuparsalalabPage } from './desocuparsalalab.page';

const routes: Routes = [
  {
    path: '',
    component: DesocuparsalalabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesocuparsalalabPageRoutingModule {}
