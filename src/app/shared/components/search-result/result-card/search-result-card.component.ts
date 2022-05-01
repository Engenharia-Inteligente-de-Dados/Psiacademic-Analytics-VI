import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IArticle } from 'src/app/modules/articles/article.interfaces';
import { ViewType } from 'src/app/shared/enums/types.enums';
import { IrequestMoreDataEvent } from '../search-result.interface';

@Component({
  selector: 'psi-search-result-card',
  templateUrl: './search-result-card.component.html',
  styleUrls: ['./search-result-card.component.scss']
})
export class SearchResultCardComponent implements OnInit {
  @Input() articles?:IArticle[];
  @Output(`resquestMoreArticle`) resquestMoreArticles: EventEmitter<IrequestMoreDataEvent> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  loadData(event: any) {
    this.resquestMoreArticles.emit({artigosAtuais: this.articles, IonEvent:event, viewType: ViewType.card});
  }

  gotTo(url: string) {
    window.open(url, '_blank');
  }

}
