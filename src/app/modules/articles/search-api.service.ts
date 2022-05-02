import { Injectable } from '@angular/core';
import { API } from 'src/environments/environment';
import { BaseHttpProvider } from '../../shared/providers/base-http.provider';
import { IOptionSearch } from '../../shared/interfaces/search.interfaces';
import { sleep } from '../../shared/utils/mock.utils';
import { Subject } from 'rxjs';
import { artigosMock } from 'src/app/shared/components/search-result/search-result.mock';


interface ISRC{
  palavras?: string;
  attrubutes?: any;
  paginacao: {
    pagina: number;
    limite: number;
  };
}
@Injectable({
  providedIn: 'root'
})
export class SearchAPI {

  private palavras?:string;
  private attrubutes?:IOptionSearch[]
  private paginacao?:{pagina?:number, limite?:number}
  public searchArticles$: Subject<ISRC> = new Subject<ISRC>();
  constructor(private http:BaseHttpProvider) { }


  async search(palavras?:string, attributes?:IOptionSearch[], paginacao?: { pagina:number, limite:number}):Promise<any>{
    if(attributes.length > 0 && palavras.length > 0){
      const params = this.http.paramsValidate(attributes)
      return await this.http.get(`${API}/avancada${params}`,{...paginacao})
    }
    else{
      return await this.http.get(`${API}/avancada`,{palavras:palavras, ...paginacao});
    }

  }

  async searchMock(palavras?:string,attributes?:IOptionSearch[], paginacao?: { pagina:number, limite:number}):Promise<any>{
    if(attributes?.length > 0){
      let params = this.http.paramsValidate(attributes)
      console.log(`${API}/avancada`,{palavras:palavras, params, ...paginacao})
      if(paginacao && paginacao.pagina > 1){
        return artigosMock(paginacao.pagina)
      }
      await sleep()
      return artigosMock()
    }
    else{
      console.log(`${API}/palavras/chave`,{palavras:palavras, ...paginacao})
      await sleep()
      return artigosMock()
    }

  }
}
