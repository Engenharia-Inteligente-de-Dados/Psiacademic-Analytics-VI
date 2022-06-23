import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ErrorHttpFastAPI } from '../interfaces/error.http.fastAPI';
import { OurError } from '../utils/our-error';

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

  exceptionHandler(err: HttpErrorResponse) {
    if (err?.error?.detail[0]?.msg) {
      throw new OurError(err?.error?.detail[0]?.msg, err);
    } else {
      throw err;
    }
  }

  async get<T>(url: string, params?: any, customHeaders: any = {} ): Promise<T> {
    try {
      const headers = this.generateHeaders(customHeaders);
      const http$ = this.http.get<T>(url, { params, headers});
      return await firstValueFrom(http$);
    } catch (error:any) {
      this.exceptionHandler(error);
    }
  }

  async post<T>(url: string, body: any, params?:any, customHeaders: any = {}): Promise<T> {
    try {
      const headers = this.generateHeaders(customHeaders);
      const http$ = this.http.post<T>(url, body, { params, headers })
      return await firstValueFrom(http$);
    } catch (error:any) {
      this.exceptionHandler(error);
    }
  }

  async put<T>(url: string, body: any, params?:any, customHeaders: any = {}): Promise<T> {
    try {
      const headers = this.generateHeaders(customHeaders);
      const http$ = this.http.put<T>(url, body, { headers, params });
      return await firstValueFrom(http$);
    } catch (error:any) {
      this.exceptionHandler(error);
    }
  }

  async delete<T>(url: string, customHeaders: any = {}): Promise<T> {
    try {
    const headers = this.generateHeaders(customHeaders);
    const http$ = this.http.delete<T>(url, { headers });
    return await firstValueFrom(http$);
    } catch (error:any) {
      this.exceptionHandler(error);
    }
  }
}
