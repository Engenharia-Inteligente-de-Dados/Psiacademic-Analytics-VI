import { Injectable } from '@angular/core';
import { ConsultType } from 'src/app/shared/enums/types.enums';
import { IConsulta } from 'src/app/shared/interfaces/consulta.interface';
import { BaseHttpProvider } from 'src/app/shared/providers/base-http.provider';
import { API } from 'src/environments/environment';
import { IArticles } from '../articles/article.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ConsultsApiService {
  constructor(private http: BaseHttpProvider) {}

  async consulta(params: IConsulta, tipo: string): Promise<IArticles> {
    const todos = `todos`;
    if (params.repositorio === `todos`) {
      delete params.repositorio;
    }
    if (params.transtorno === `todos`) {
      delete params.transtorno;
    }

    const param = this.http.paramsValidate(params);
    if (tipo === ConsultType.Anos) {
      return await this.AnosPeriodo(param);
    }
    if (tipo === ConsultType.Expressoes) {
      return await this.expressoes(param);
    }
    if (tipo === ConsultType.Transtornos) {
      return await this.transtornos(param);
    }
    if (tipo === ConsultType.Repositorios) {
      return await this.repositorios(param);
    }
    if (tipo === ConsultType.Avancada) {
      return await this.avancada(param);
    }
  }

  async AnosPeriodo(param: string): Promise<IArticles> {
    return await this.http.get(`${API}/ano/periodo/${param}`,);
  }

  async expressoes(param: string): Promise<IArticles> {
    return await this.http.get(`${API}/expressao/${param}`);
  }

  async transtornos(param: string): Promise<IArticles> {
    return await this.http.get(`${API}/expressao/${param}`, );
  }

  async repositorios(param: string): Promise<IArticles> {
    return await this.http.get(`${API}/repositorio/${param}`, );
  }

  async avancada(param: string): Promise<IArticles> {
    return await this.http.get(`${API}/generica/${param}`);
  }
}
