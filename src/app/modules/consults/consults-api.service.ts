import { Injectable } from '@angular/core';
import { ConsultType } from 'src/app/shared/enums/types.enums';
import { BaseHttpProvider } from 'src/app/shared/providers/base-http.provider';
import { API } from 'src/environments/environment';
import { IArticles } from '../articles/article.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ConsultsApiService {
  constructor(private http: BaseHttpProvider) { }

  async consulta(params: any, tipo: string):Promise<IArticles>{
    if (tipo === ConsultType.anos) {
      return await this.AnosPeriodo(params);
    }
    if (tipo === ConsultType.expressoes) {
      return await this.expressoes(params);
    }
    if (tipo === ConsultType.transtornos) {
      return await this.transtornos(params);
    }
    if (tipo === ConsultType.repositorios) {
      return await this.repositorios(params);
    }
    if (tipo === ConsultType.avancada) {
      return await this.AnosPeriodo(params);
    }
  }
  async AnosPeriodo(params: any):Promise<IArticles>{
    const { anoi, anof, pagina, limite } = params;
    return await this.http.get(`${API}/ano/periodo/`,
      { anoi, anof, pagina, limite });
  }

  async expressoes(params: any):Promise<IArticles>{
    const { titulo, resumo, palavraChave, pagina, limite } = params;
    return await this.http.get(`${API}/expressao/`,{ titulo, resumo, palavraChave, pagina, limite });
  }

  async transtornos(params: any):Promise<IArticles>{
    const { titulo, resumo, palavraChave, pagina, limite } = params;
    return await this.http.get(`${API}/expressao/`,{ titulo, resumo, palavraChave, pagina, limite });
  }

  async repositorios(params: any):Promise<IArticles>{
    const { titulo, resumo, palavraChave, pagina, limite } = params;
    return await this.http.get(`${API}/expressao/`,{ titulo, resumo, palavraChave, pagina, limite });
  }
}
