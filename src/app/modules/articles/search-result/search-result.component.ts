import { Component, Input, OnInit, SimpleChanges, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { IArticle } from '../article.interfaces';

@Component({
  selector: 'psi-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  @Input() articles?:IArticle[];
  @Output() resquestMoreArticles: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  loadData(event: any) {
    this.resquestMoreArticles.emit({artigosAtuais: this.articles, IonEvent:event});
  }

  gotTo(url: string) {
    window.open(url, '_blank');
  }

}
