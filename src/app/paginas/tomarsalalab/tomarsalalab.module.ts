import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TomarsalalabPageRoutingModule } from './tomarsalalab-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { TomarsalalabPage } from './tomarsalalab.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TomarsalalabPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [TomarsalalabPage]
})
export class TomarsalalabPageModule {}
