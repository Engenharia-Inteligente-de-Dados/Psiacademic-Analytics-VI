import { Injectable } from '@angular/core';
import { API } from 'src/environments/environment';
import { BaseHttpProvider } from '../providers/base-http.provider';
import { IOptionSearch } from '../interfaces/search.interfaces';
import { IArticle } from '../../modules/articles/article.interfaces';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:BaseHttpProvider) { }


  async search(search:string,attributos:IOptionSearch[], paginacao?: { pagina?:number, limite?:number}):Promise<IArticle[]>{
    if(attributos.length > 0){
      console.log(`console.log`,attributos);
      let params = this.paramsToURLSearch(attributos)
      return await this.http.get(`${API}/palavras/chave`,{palavras:search, params, ...paginacao})
    }
    else{
      return await this.http.get(`${API}/palavras/chave`,{palavras:search, ...paginacao});
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
