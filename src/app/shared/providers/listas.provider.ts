import { Injectable } from '@angular/core';
import { API_P } from 'src/environments/environment';
import { BaseHttpProvider } from './base-http.provider';

//Dashboards repositórios
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
    return await this.http.get(`${API_P}/lista/anos`);
  }

  async getRepositorios(): Promise<any> {
    return await this.http.get(`${API_P}/lista/repositorios`);
  }

  async getTrasntornos(): Promise<any> {
    return await this.http.get(`${API_P}/lista/transtornos`);
  }

  private sort(a, b) {
    return a - b;
  }

  conteudo: string [] = [
    'internações', 
    'atenção básica'];
  anos: number[] = [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
  estados: string[] = [
    'AC', 'AL', 'AP', 'AM', 'BA',
    'CE', 'DF', 'ES', 'GO', 'MA',
    'MT', 'MS', 'MG', 'PA', 'PB',
    'PR', 'PE', 'PI', 'RJ', 'RN',
    'RS', 'RO', 'RR', 'SC', 'SP',
    'SE', 'TO'
  ];
  morbidades: string[] = [
    'Demência',
    'Transt mentais e comportamentais dev uso de álcool',
    'Transt mentais e comportamentais dev uso outr subst psicoat',
    'Esquizofrenia, transt esquizotípicos e delirantes',
    'Transt de humor [afetivos]',
    'Transt neuróticos, relacionados com "stress" e somatof',
    'Retardo mental',
    'Outros transt mentais e comportamentais'
  ];
  tipoAtendimento: string[] = [
    'Consulta no dia',
    'Consulta agendada',
    'Atendimento de urgência'
  ]

  async getListasP(): Promise<any> {
    return {
      conteudo: this.conteudo,
      anos: this.anos,
      estados: this.estados,
      morbidades: this.morbidades,
      tipoAtendimento: this.tipoAtendimento,
    };
  }
}




