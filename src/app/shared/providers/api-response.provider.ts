import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ApiResponseProvider {
  constructor(
    private toastController: ToastController,
    ) { }



    async sucesso(msg: string, header?: string, type:string='toast') {
      if(type=='toast'){
        const toast = this.toast(msg,'top','success', header);
        return toast;
      }
      else{
        return msg;
      }
    }


    async error(msg: string, header?: string, type:string='toast') {
      if(type=='toast'){
        const toast = this.toast(msg,'top','danger', header);
        return toast;
      }
      else{
        return msg;
      }
    }
    private async toast(message:string,position:any='top',color:string, header?:string, duration:number = 3000) {
      const toast = await this.toastController.create({
        header: header,
        message: message,
        position: position,
        duration: duration,
        color: color,
        cssClass: `${color}-toast`

      });
      await toast.present();
      return toast;
    }

}
