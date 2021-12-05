import { Injectable } from '@angular/core';
import { API } from 'src/environments/environment';
import { BaseHttpProvider } from '../../shared/providers/base-http.provider';
import { IOptionSearch } from '../../shared/interfaces/search.interfaces';
import { IArticle } from './article.interfaces';
import { artigosMock } from './search-result/search-result.mock';
import { sleep } from '../../shared/utils/mock.utils';
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
export class SearchAPI {

  private palavras?:string;
  private attrubutes?:IOptionSearch[]
  private paginacao?:{pagina?:number, limite?:number}
  public searchArticles$: Subject<ISRC> = new Subject<ISRC>();
  constructor(private http:BaseHttpProvider) { }


  async search(palavras?:string, attributes?:IOptionSearch[], paginacao?: { pagina:number, limite:number}):Promise<any>{
    if(attributes.length > 0 && palavras.length > 0){
      const params = this.paramsToURLSearch(attributes)
      return await this.http.get(`${API}/avancada${params}`,{...paginacao})
    }
    else{
      return await this.http.get(`${API}/avancada`,{palavras:palavras, ...paginacao});
    }

  }

  async searchMock(palavras?:string,attributes?:IOptionSearch[], paginacao?: { pagina:number, limite:number}):Promise<any>{
    if(attributes?.length > 0){
      let params = this.paramsToURLSearch(attributes)
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


  /***
	 * @method paramsToURLSearch serve para retornar os parametros de uma query.
	 * Serve para caso tenha 1 ou mais requisitos para pesquisa/filtros
	 * Exemplo : Pesquisar Atividade
	 * @param values : recebe um array de objeto.
	 * @returns Retorna o parametro parametrizado de acordo com @param values e o transforma em uma query.
	 *  Exemplo: {name:"Atividade1"} retorna name=Atividade1
	 */
	private paramsToURLSearch(values: any): string {
		const params = new URLSearchParams()
    const valueObj:any = {}
    values.forEach((obj:any) => {
      valueObj[obj?.key] = obj[obj.key]
    })
		for (const key in valueObj) {
			if (valueObj[key] !== '' && valueObj[key] !== 'undefined' && valueObj[key] != null) {
				params.set(key, valueObj[key])
			  }
	  	}
    return `?${params.toString()}`
  }
}
