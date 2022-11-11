import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalasylaboratoriosPage } from './salasylaboratorios.page';

const routes: Routes = [
  {
    path: '',
    component: SalasylaboratoriosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalasylaboratoriosPageRoutingModule {}
