import { IOptionSearch } from '../../shared/interfaces/search.interfaces';
export interface ISearchEvent {
  detail: {
    palavras: string;
    attributes: IOptionSearch[];
  };
}

export interface IArticle {
    _id: {
      $oid: string;
    },
    autores: string[],
    data: {
      $date: Date;
    },
    palavrachave: string[],
    repositorio: string,
    resumo: string
    tipo: string,
    titulo: string
    url: string
  }

