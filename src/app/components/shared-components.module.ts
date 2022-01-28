import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ModalBaseComponent } from './modal-base/modal-base.component';


@NgModule({
  declarations: [HeaderComponent, ModalBaseComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [HeaderComponent, ModalBaseComponent]
})
export class SharedComponentsModule { }
