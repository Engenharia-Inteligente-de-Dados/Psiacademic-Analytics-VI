import { Injectable } from '@angular/core';
import { API } from 'src/environments/environment';
import { BaseHttpProvider } from '../providers/base-http.provider';

@Injectable({
  providedIn: 'root'
})
export class ShearchService {

  constructor(private http:BaseHttpProvider) { }


  async getSearch(search:string){
    return await this.http.get(`${API}/palavras/chave`,{search:search});
  }
}
