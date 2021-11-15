import { Injectable } from '@angular/core';
import { API } from 'src/environments/environment';
import { BaseHttpProvider } from '../providers/base-http.provider';
import { IOptionSearch } from '../interfaces/search.interfaces';
import { IArticle } from '../../modules/articles/article.interfaces';
import { artigosMock } from '../../modules/articles/search-result/search-result.mock';
import { sleep } from '../utils/mock.utils';
import { Subject } from 'rxjs';


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
export class SearchService {

  private palavras?:string;
  private attrubutes?:IOptionSearch[]
  private paginacao?:{pagina?:number, limite?:number}
  public searchArticles$: Subject<ISRC> = new Subject<ISRC>();
  constructor(private http:BaseHttpProvider) { }


  async search(palavras?:string,attributes?:IOptionSearch[], paginacao?: { pagina:number, limite:number}):Promise<any>{
    if(attributes.length > 0){
      console.log(`console.log`,attributes);
      let params = this.paramsToURLSearch(attributes)
      return await this.http.get(`${API}/palavras/chave`,{palavras:palavras, params, ...paginacao})
    }
    else{
      return await this.http.get(`${API}/palavras/chave`,{palavras:palavras, ...paginacao});
    }

  }

  async searchMock(palavras?:string,attributes?:IOptionSearch[], paginacao?: { pagina:number, limite:number}):Promise<any>{
    if(attributes?.length > 0){
      console.log(`console.log`,attributes);
      let params = this.paramsToURLSearch(attributes)
      console.log(`${API}/palavras/chave`,{palavras:palavras, params, ...paginacao})
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


  /***
	 * @method paramsToURLSearch serve para retornar os parametros de uma query.
	 * Serve para caso tenha 1 ou mais requisitos para pesquisa/filtros
	 * Exemplo : Pesquisar Atividade
	 * @param values : recebe um objeto.
	 * @returns Retorna o parametro parametrizado de acordo com @param values e o transforma em uma query.
	 *  Exemplo: {name:"Atividade1"} retorna name=Atividade1
	 */
	protected paramsToURLSearch(values: any): string {
		const params = new URLSearchParams()
		for (const key in values) {
			if (values[key] !== '' && values[key] !== 'undefined' && values[key] != null) {
				params.set(key, values[key])
			}
		}
		return `?${params.toString()}`
	}
}
