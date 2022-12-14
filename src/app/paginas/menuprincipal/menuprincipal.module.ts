import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuprincipalPageRoutingModule } from './menuprincipal-routing.module';
import { ComponentsModule } from '../../components/components.module';

import { MenuprincipalPage } from './menuprincipal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuprincipalPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [MenuprincipalPage]
})
export class MenuprincipalPageModule {}
