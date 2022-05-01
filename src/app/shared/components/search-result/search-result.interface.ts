import { IArticle } from 'src/app/modules/articles/article.interfaces';
import { ViewType } from '../../enums/types.enums';

export interface IrequestMoreDataEvent {
  artigosAtuais: IArticle[],
  IonEvent:Event | any ,
  viewType: ViewType
};


