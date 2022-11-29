import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarsalaPage } from './agregarsala.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarsalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarsalaPageRoutingModule {}
