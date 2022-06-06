import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

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

  async get<T>(url: string, params?: any, customHeaders: any = {} ): Promise<T> {
    const headers = this.generateHeaders(customHeaders);
    const http$ = this.http.get<T>(url, { params, headers});
    return await firstValueFrom(http$);
  }

  async post<T>(url: string, body: any, params?:any, customHeaders: any = {}): Promise<T> {
    const headers = this.generateHeaders(customHeaders);
    const http$ = this.http.post<T>(url, body, { params, headers })
    return await firstValueFrom(http$);
  }

  async put<T>(url: string, body: any, params?:any, customHeaders: any = {}): Promise<T> {
    const headers = this.generateHeaders(customHeaders);
    const http$ = this.http.put<T>(url, body, { headers, params });
    return await firstValueFrom(http$);
  }

  async delete<T>(url: string, customHeaders: any = {}): Promise<T> {
    const headers = this.generateHeaders(customHeaders);
    const http$ = this.http.delete<T>(url, { headers });
    return await firstValueFrom(http$);

  }
}
