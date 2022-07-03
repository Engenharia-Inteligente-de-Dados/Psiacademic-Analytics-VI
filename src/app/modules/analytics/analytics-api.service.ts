import { Injectable } from '@angular/core';
import { API, OLD_API } from 'src/environments/environment';
import { BaseHttpProvider } from '../../shared/providers/base-http.provider';
import { URLParams } from '../../shared/utils/http.utils';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsAPIService {
  constructor(private http: BaseHttpProvider) {}


  /**
   * @Deprecated
   */
  async getTrabalhosAnosOLD(): Promise<any> {
    try {
      return await this.http.get(`${OLD_API}/contadores/anos`, {}, {});
    } catch (error) {
    }
  }
  /**
   *
   * @Deprecated
   */
  async getTrabalhosRepositorioOLD(): Promise<any> {
    try {
      return await this.http.get(`${OLD_API}/contadores/repositorios`, {}, {});
    } catch (error) {
    }
  }

  async getAnos(): Promise<any> {
    return await this.http.get(`${API}/total/ano`);
  }

  async getRepositorios(): Promise<any> {
    return await this.http.get(`${API}/total/repositorio`);
  }

  async getTotalRepositoriosPorAnos(rep): Promise<any> {
    return await this.http.get(`${API}/total/total-anos-repositorio?repositorio=${rep}`);
  }

  async getChartFiltrado(url:string,params): Promise<any> {
    const param = URLParams(params)
    return await this.http.get(`${API}${url}${param}`);
  }
}
