import { Injectable } from '@angular/core';
import { API, OLD_API } from 'src/environments/environment';
import { BaseHttpProvider } from '../../shared/providers/base-http.provider';
import { TOTAL_REP, TOTAL_YEARS } from './analytics.mock';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsAPIService {
  constructor(private http: BaseHttpProvider) {}

  async getTrabalhosAnosOLD(): Promise<any> {
    try {
      return await this.http.get(`${OLD_API}/contadores/anos`, {}, {});
    } catch (error) {
      return TOTAL_YEARS;
    }
  }

  async getTrabalhosRepositorioOLD(): Promise<any> {
    try {
      return await this.http.get(`${OLD_API}/contadores/repositorios`, {}, {});
    } catch (error) {
      return TOTAL_REP;
    }
  }

  async getAnos(): Promise<any> {
    return await this.http.get(`${API}/total/ano`);
  }

  async getRepositorios(): Promise<any> {
    return await this.http.get(`${API}/total/repositorio`);
  }
}
