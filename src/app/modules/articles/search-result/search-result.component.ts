import { Component, OnInit } from '@angular/core';
import { artigoMock } from './search-result.mock';

@Component({
  selector: 'psi-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  public artigo = artigoMock()

  constructor() { }

  ngOnInit(): void {
  }

}
