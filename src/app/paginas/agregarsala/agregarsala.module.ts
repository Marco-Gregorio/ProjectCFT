import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarsalaPageRoutingModule } from './agregarsala-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { AgregarsalaPage } from './agregarsala.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarsalaPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [AgregarsalaPage]
})
export class AgregarsalaPageModule {}
