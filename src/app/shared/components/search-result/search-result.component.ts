import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IArticle } from '../../../modules/articles/article.interfaces';
import { IconType } from '../../enums/types.enums';
import { IrequestMoreDataEvent } from './search-result.interface';

@Component({
  selector: 'psi-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  @Input() articles?: IArticle[];
  @Output(`resquestMoreArticles`) requestMoreArticles: EventEmitter<IrequestMoreDataEvent> = new EventEmitter();

  viewTypeCard =  true;
  iconType: string = IconType.iCard;


  constructor() { }

  ngOnInit(): void {
  }


  requestMoreData(event: any) {
    this.requestMoreArticles.emit(event);
  }


  changeViewType(){
    this.viewTypeCard = !this.viewTypeCard;
    this.iconType = this.viewTypeCard ? IconType.iCard : IconType.iList;
  }

}
