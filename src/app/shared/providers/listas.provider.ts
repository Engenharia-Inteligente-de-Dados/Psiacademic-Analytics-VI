import { Injectable } from '@angular/core';
import { API } from 'src/environments/environment';
import { BaseHttpProvider } from './base-http.provider';

@Injectable({ providedIn: 'root' })
export class ListasProvider {
  listAnos: any[] = [];
  listaRepositorios: any[] = [];
  listaTranstornos: any[] = [];
  constructor(private http: BaseHttpProvider) {}

  async getListas(): Promise<any> {
    if(this.listAnos.length === 0) {
      this.listAnos = await this.getListaAnos();
    }
    if (this.listaRepositorios.length === 0) {
      this.listaRepositorios = await this.getListaRepositorios()
    }
    if (this.listaTranstornos.length === 0) {
      this.listaTranstornos = await this.getListaTranstornos()
    }
    return await {
      anos: this.listAnos,
      repositorios: this.listaRepositorios,
      transtornos: this.listaTranstornos,
    };
  }

  private async getListaAnos() {
    try {
      let listaAnos = await this.getAnos();

      listaAnos = listaAnos.map((ano) => {
        if (!!ano._id) {
          return ano._id;
        }
      });
      return listaAnos.sort(this.sort);
    } catch (error) {
      console.error(error);
    }
  }

  private async getListaRepositorios(){
    try {
      let listaRep = await this.getRepositorios();
      listaRep = listaRep.map((rep) => {
        if (rep._id) return rep._id;
      });
      return listaRep.sort(this.sort);
    } catch (error) {
      console.error(error)
    }
  }

  private async getListaTranstornos(){
    try {
      let listaTrans = await this.getTrasntornos();
      return listaTrans.sort(this.sort);
    } catch (error) {
      console.error(error)
    }
  }

  async getAnos(): Promise<any> {
    return await this.http.get(`${API}/lista/anos`);
  }

  async getRepositorios(): Promise<any> {
    return await this.http.get(`${API}/lista/repositorios`);
  }

  async getTrasntornos(): Promise<any> {
    return await this.http.get(`${API}/lista/transtornos`);
  }

  private sort(a, b) {
    return a - b;
  }
}
