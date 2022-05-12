import { Injectable } from '@angular/core';
import { LoadingController, LoadingOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class LoadingProvider {
  constructor(private loadingController: LoadingController) {
  }

  async loading() {
    const options = {
        message: 'Carregando, aguarde...',
        spinner: 'lines-small',
        showBackdrop: false,
        cssClass: `custom-loading`,
    }
    const loading = await this.customLoading(options);
    return loading;
  }

  async customLoading(options: LoadingOptions | any) {
    const loading = await this.loadingController.create(options);
    return loading;
  }
}
