import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TomarsalalabPage } from './tomarsalalab.page';

const routes: Routes = [
  {
    path: '',
    component: TomarsalalabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TomarsalalabPageRoutingModule {}
