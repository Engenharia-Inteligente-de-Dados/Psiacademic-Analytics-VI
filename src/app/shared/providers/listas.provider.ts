import { Injectable } from '@angular/core';
import { API } from 'src/environments/environment';
import { BaseHttpProvider } from './base-http.provider';

@Injectable({ providedIn: 'root' })
export class ListasProvider {
  listAnos: any[] = [];
  listaRepositorios: any[] = [];

  constructor(private http: BaseHttpProvider) {
  }

  async getListas(): Promise<any> {
    if(this.listAnos.length === 0) {
      const listaAnos = await this.getAnos();

      const newlistaAnos = listaAnos.map(ano => {
        if(!!ano._id) {
          return ano._id
        }
      });
      newlistaAnos.shift();
      this.listAnos = newlistaAnos.sort(this.sort);
    }
    if(this.listaRepositorios.length === 0) {
      let listaRep = await this.getRepositorios();
      listaRep = listaRep.map(rep => {if(rep._id) return rep._id});
      this.listaRepositorios = listaRep.sort(this.sort);}
    return await {
      anos: this.listAnos,
      repositorios: this.listaRepositorios,
    };
  }

  async getAnos(): Promise<any> {
    return await this.http.get(`${API}/lista/anos`);
  }

  async getRepositorios(): Promise<any> {
    return await this.http.get(`${API}/lista/repositorios`);
  }


  private sort(a,b){
    return a - b;
  }
}
