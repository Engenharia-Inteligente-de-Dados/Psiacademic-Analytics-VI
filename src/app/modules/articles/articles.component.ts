import { Component, ElementRef, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { SearchService } from 'src/app/shared/services/search.service';
import { IArticle, ISearchEvent } from './article.interfaces';
import { ApiResponseProvider } from '../../shared/providers/api-response.provider';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  @ViewChild('imgsEl') imgsEl: ElementRef | undefined;
  public search_init = false;
  public paginacao = {
    pagina: 1,
    limite: 100,
  };

  public loading = false;
  public articles: IArticle[] = [];

  constructor(
    private searchService: SearchService,
    private apiResponseProvider: ApiResponseProvider
  ) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ngChanges Articles`,changes);
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

  }

  async pesquisar(event: ISearchEvent) {
    this.loading = true;
    const { attributes, search } = event?.detail;
    try {
      if (search) {
        const articles = await this.searchService.searchMock(
          search,
          attributes,
          this.paginacao
        );
        this.articles = articles;
        this.remove_img();
      }
    } catch (e: any) {
      console.log(`e`, e);
      const toast = await this.apiResponseProvider.error(
        e.message,
        'Erro ao pesquisar',
        'toast'
      );
      this.remove_img();
    } finally {
      this.loading = false;
    }
  }

  remove_img(event?: any) {
    this.imgsEl?.nativeElement.classList.add('animate');
}
}
