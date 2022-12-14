import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalasylaboratoriosPageRoutingModule } from './salasylaboratorios-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { SalasylaboratoriosPage } from './salasylaboratorios.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalasylaboratoriosPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [SalasylaboratoriosPage]
})
export class SalasylaboratoriosPageModule {}
