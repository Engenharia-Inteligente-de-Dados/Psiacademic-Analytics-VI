import { IArticle } from 'src/app/modules/articles/article.interfaces';
import { ViewType } from '../../enums/types.enums';
import { IPagination } from '../../interfaces/pagination.interface';

export interface IrequestMoreDataEvent {
  artigosAtuais?: IArticle[],
  paginacao?: IPagination
  IonEvent?:Event | any ,
  viewType: ViewType
};


