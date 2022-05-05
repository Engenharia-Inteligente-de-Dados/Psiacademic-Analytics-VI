import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPagination } from 'src/app/shared/interfaces/pagination.interface';
import { IArticles, IArticle } from '../../../../modules/articles/article.interfaces';
import { IrequestMoreDataEvent } from '../search-result.interface';

@Component({
  selector: 'psi-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss']
})
export class ResultTableComponent implements OnInit {

  @Input() articles: IArticle[];

  constructor() { }

  ngOnInit(): void {
  }


  gotTo(url: string) {
    window.open(url, '_blank');
  }

}
