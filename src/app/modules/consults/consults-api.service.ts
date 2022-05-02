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
  constructor(private http: BaseHttpProvider) { }

  async consulta(params: IConsulta, tipo: string):Promise<IArticles>{
    if (tipo === ConsultType.Anos) {
      return await this.AnosPeriodo(params);
    }
    if (tipo === ConsultType.Expressoes) {
      return await this.expressoes(params);
    }
    if (tipo === ConsultType.Transtornos) {
      return await this.transtornos(params);
    }
    if (tipo === ConsultType.Repositorios) {
      return await this.repositorios(params);
    }
    if (tipo === ConsultType.Avancada) {
      return await this.avancada(params);
    }
  }
  async AnosPeriodo(params: IConsulta):Promise<IArticles>{
    const { anoi, anof, pagina, limite } = params;
    return await this.http.get(`${API}/ano/periodo/`,
      { anoi, anof, pagina, limite });
  }

  async expressoes(params: IConsulta):Promise<IArticles>{
    const { titulo, resumo, palavra_chave, pagina, limite } = params;
    return await this.http.get(`${API}/expressao/`,{ titulo, resumo, palavra_chave, pagina, limite });
  }

  async transtornos(params: IConsulta):Promise<IArticles>{
    const { transtorno, pagina, limite } = params;
    return await this.http.get(`${API}/expressao/`,{transtorno, pagina, limite });
  }

  async repositorios(params: IConsulta):Promise<IArticles>{
    const { repositorio, pagina, limite } = params;
    return await this.http.get(`${API}/expressao/`,{ repositorio, pagina, limite });
  }

  async avancada(params: IConsulta):Promise<IArticles>{
    if(params.repositorio != `todos`){
      delete params.repositorio;
    }
    if(params.transtorno != `todos`){
      delete params.transtorno;
    }
    const param = this.http.paramsValidate(params);
    return await this.http.get(`${API}/expressao/${param}`,);
  }
}
