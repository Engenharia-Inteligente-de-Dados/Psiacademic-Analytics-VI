import { Injectable } from '@angular/core';
import { API_P, API } from 'src/environments/environment';
import { BaseHttpProvider } from '../../shared/providers/base-http.provider';
import { URLParams } from '../../shared/utils/http.utils';

@Injectable({
  providedIn: 'root',
})
export class SaudePublicaAPIService {
  constructor(private http: BaseHttpProvider) {}

  /**
   * @Deprecated
   */
  async getCasosAnoEstado(): Promise<any> {
    try {
      return await this.http.get(`${API_P}/casos_por_ano_estado`, {}, {});
    } catch (error) {
    }
  }
  /**
   *
   * @Deprecated
   */
  async getTotalAtendimentosAnoEstado(): Promise<any> {
    try {
      return await this.http.get(`${API_P}/atendimentos_por_ano_estado`, {}, {});
    } catch (error) {
    }
  }

  async getCasosMorbidade(): Promise<any> {
    return await this.http.get(`${API_P}/casos_por_morbidade`);
  }

  async getCasosAtendimentosSisab(): Promise<any> {
    return await this.http.get(`${API_P}/casos_atendimentos_sisab`);
  }

  async getCasosMorbidadeAnoEstado(): Promise<any> {
    return await this.http.get(`${API_P}/casos_por_morbidade_ano_estado`);
  }

  async getCasosAtendimentosAnoEstado(): Promise<any> {
    return await this.http.get(`${API_P}/atendimentos_sisab_ano_estado`);
  }

  async getMapaDatasus(): Promise<any> {
    return await this.http.get(`${API_P}/mapa_casos_datasus`);
  }

  async getMapaSisab(): Promise<any> {
    return await this.http.get(`${API_P}/mapa_atendimentos_sisab`);
  }

  async getTop5Datasus(): Promise<any> {
    return await this.http.get(`${API_P}/top5_estados_datasus`);
  }

  async getTop5Sisab(): Promise<any> {
    return await this.http.get(`${API_P}/top5_estados_sisab`);
  }

  async getChartFiltrado(url:string,params): Promise<any> {
    const param = URLParams(params)
    return await this.http.get(`${API}${url}${param}`);
  }

  async getChartFiltrado_P(url:string,params): Promise<any> {
    const param = URLParams(params)
    console.log("banana")
    return await this.http.get(`${API_P}${url}${param}`);
  }
}
