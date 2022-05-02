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


}
