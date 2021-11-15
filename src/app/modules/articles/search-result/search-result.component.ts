import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { IArticle } from '../article.interfaces';

@Component({
  selector: 'psi-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  @Input() articles?:IArticle[];

  public ArrayArticles: IArticle[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.articles){
      this.ArrayArticles.push(...changes.articles.currentValue);
    }

  }

}
