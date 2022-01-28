import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrameworkPageRoutingModule } from './framework-routing.module';

import { FrameworkPage } from './framework.page';

// Para usar el Login como un modal
import { SharedComponentsModule } from '../../components/shared-components.module';
import { LoginPageModule } from '../login/login.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrameworkPageRoutingModule,
    SharedComponentsModule,
    LoginPageModule
  ],
  declarations: [FrameworkPage]
})
export class FrameworkPageModule { }
