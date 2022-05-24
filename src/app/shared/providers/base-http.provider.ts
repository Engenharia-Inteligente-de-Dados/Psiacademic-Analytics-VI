import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpProvider {

  constructor(private http: HttpClient) { }

  generateHeaders(customHeaders: any = {}) {
    const basicHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*',
    };
    const headers = {
      ...basicHeaders,
      ...customHeaders,
    };

    return new HttpHeaders(headers);
  }

  getSubscription<T>(url: string, params?: any, customHeaders: any = {}, reportProgress:boolean=false): Observable<T> {
    const headers =  this.generateHeaders(customHeaders);
    return this.http.get<T>(url, { headers, params, reportProgress });
  }

  async get<T>(url: string, params?: any, customHeaders: any = {} ): Promise<T> {
    const headers = this.generateHeaders(customHeaders);
    return this.http.get<T>(url, { params, headers}).toPromise();
  }

  async post<T>(url: string, body: any, params?:any, customHeaders: any = {}): Promise<T> {
    const headers = this.generateHeaders(customHeaders);

    return this.http.post<T>(url, body, { params, headers }).toPromise();
  }

  async put<T>(url: string, body: any, params?:any, customHeaders: any = {}): Promise<T> {
    const headers = this.generateHeaders(customHeaders);

    return this.http.put<T>(url, body, { headers, params }).toPromise();
  }

  async delete<T>(url: string, customHeaders: any = {}): Promise<T> {
    const headers = this.generateHeaders(customHeaders);

    return this.http.delete<T>(url, { headers }).toPromise();
  }


  /***
	 * @method paramsValidate serve para retornar os parametros de uma query.
	 * Serve para caso tenha 1 ou mais requisitos para pesquisa/filtros
	 * Exemplo : Pesquisar Atividade
	 * @param values : recebe um array de objeto.
	 * @returns Retorna o parametro parametrizado de acordo com @param values e o transforma em uma query.
	 *  Exemplo: {name:"Atividade1"} retorna name=Atividade1
	 */
   public paramsValidate(values: any): string {
    const valueObj:any = {}
    if(Array.isArray(values)){
      values.forEach((obj:any) => {
        valueObj[obj?.key] = obj[obj.key]
      })
    return this.URLParams(valueObj)
    }
    else{
      return this.URLParams(values)
    }
  }

  private URLParams(valueObj: any): string {
    const params = new URLSearchParams()
    for (const key in valueObj) {
			if (valueObj[key] !== '' && valueObj[key] !== 'undefined' && valueObj[key] != null) {
				params.set(key, valueObj[key])
			  }
	  	}
    return `?${params.toString()}`
  }
}
