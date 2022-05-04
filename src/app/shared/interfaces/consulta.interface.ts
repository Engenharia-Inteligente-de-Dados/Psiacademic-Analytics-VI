import { IPagination } from './pagination.interface';
import { ConsultType } from '../enums/types.enums';
export interface IConsulta {
  ano?: string | number;
  anoi?: string | number;
  anof?: string | number;
  titulo?: string;
  resumo?: string;
  palavras_chaves?: string[];
  palavra_chave?: string;
  transtorno?: string;
  repositorio?: string;
  paginacao?: IPagination;
  pagina?: string | number;
  limite?: string | number;
}


export interface IOptionsSelectConsulta{
  anosOptions: any[];
  transtornoOptions: any[];
  repositorioOptions: any[];
}
