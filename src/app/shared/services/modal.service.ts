import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfigComponent } from '../components/config/config.component';
@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalCtrl : ModalController) { }

  async showConfig(data: any) {
    const modal = await this.modalCtrl.create({
      component: ConfigComponent,
      showBackdrop: true,
      animated: true,
      componentProps: { data: data }
    });
    modal.present()
    return modal;
  }

  async show(component: any, data?: any) {
    const modal = await this.modalCtrl.create({
      component: component,
      showBackdrop: true,
      animated: true,
      componentProps: { data: data }
    });
    modal.present()
    return modal;
  }
}
