import { Injectable } from '@angular/core';
import { ConsultaType } from 'src/app/shared/enums/types.enums';
import { BaseHttpProvider } from 'src/app/shared/providers/base-http.provider';
import { paramsValidate } from 'src/app/shared/utils/http.utils';
import { API } from 'src/environments/environment';
import { ITrabalhos } from '../../shared/interfaces/trabalhos.interface';

@Injectable({
  providedIn: 'root',
})
export class ConsultsApiService {
  constructor(private http: BaseHttpProvider) {}

  async consulta(params: any, tipo: string): Promise<ITrabalhos> {
    const todos = 'Todos';
    if (params.repositorio === todos) {
      delete params.repositorio;
    }
    if (params.transtorno === todos) {
      delete params.transtorno;
    }
    if(params.ano === todos){
      delete params.anos;
    }

    const param = paramsValidate(params);
    if (tipo === ConsultaType.Anos) {
      return await this.AnosPeriodo(param);
    }
    if (tipo === ConsultaType.Expressoes) {
      return await this.expressoes(param);
    }
    if (tipo === ConsultaType.Transtornos) {
      return await this.transtornos(param);
    }
    if (tipo === ConsultaType.Repositorios) {
      return await this.repositorios(param);
    }
    if (tipo === ConsultaType.Avancada) {
      return await this.avancada(param);
    }
  }

  async AnosPeriodo(param: string): Promise<any> {
    return await this.http.get(`${API}/ano/periodo/${param}`,);
  }

  async expressoes(param: string): Promise<any> {
    return await this.http.get(`${API}/expressao/resumo_titulo${param}`);
  }

  async transtornos(param: string): Promise<any> {
    return await this.http.get(`${API}/transtornos/${param}`, );
  }

  async repositorios(param: string): Promise<any> {
    return await this.http.get(`${API}/repositorio/${param}`, );
  }

  async avancada(param: string): Promise<any> {
    return await this.http.get(`${API}/generica/${param}`);
  }
}
