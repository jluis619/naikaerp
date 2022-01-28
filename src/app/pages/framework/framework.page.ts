import { Component, OnInit } from '@angular/core';


import {
  ModalController,
  IonRouterOutlet,
} from '@ionic/angular';


// imports para abril el Login en un modal
import { ModalBaseComponent } from '../../components/modal-base/modal-base.component';
import { LoginPage } from '../login/login.page';


@Component({
  selector: 'app-framework',
  templateUrl: './framework.page.html',
  styleUrls: ['./framework.page.scss'],
})
export class FrameworkPage implements OnInit {

  constructor(private modalCtrl: ModalController,
    private routerOutlet: IonRouterOutlet
  ) { }

  ngOnInit() {
  }

  async openLogin() {
    const modal = await this.modalCtrl.create({
      component: ModalBaseComponent,
      presentingElement: this.routerOutlet.nativeEl,
      swipeToClose: true,
      componentProps: {
        rootPage: LoginPage,
      },
    });
    await modal.present();
  }

}
