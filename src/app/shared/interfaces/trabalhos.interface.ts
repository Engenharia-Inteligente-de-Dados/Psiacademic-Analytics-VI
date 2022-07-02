import { IPagination } from './pagination.interface';
export interface ITrabalhos {
  trabalhos: ITrabalho[];
  paginacao: IPagination;
}

export interface ITrabalho {
  _id: {
    $oid: string;
  };
  titulo: string;
  url: string;
  autores: string[];
  resumo: string;
  data: {
    $date: string;
  };
  repositorio: string;
  tipo: string;
  palavrachave: string[];
  transtornos: string[]
}
