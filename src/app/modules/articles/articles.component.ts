import {
  Component,
  ElementRef,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { SearchService } from 'src/app/shared/services/search.service';
import { IArticle, ISearchEvent } from './article.interfaces';
import { ApiResponseProvider } from '../../shared/providers/api-response.provider';
import { IOptionSearch } from '../../shared/interfaces/search.interfaces';

interface IPaginacao{
  pagina: number;
  limite: number;
}

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  @ViewChild('imgsEl') imgsEl: ElementRef | undefined;
  public search_init = false;
  public paginacao:IPaginacao = {
    pagina: 1,
    limite: 100,
  };

  searchParams: {
    palavras: string,
    attributes:IOptionSearch[],
    paginacao:IPaginacao,
  };

  public loading = false;
  public articles: IArticle[] = [];

  constructor(
    private searchService: SearchService,
    private apiResponseProvider: ApiResponseProvider
  ) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ngChanges Articles`, changes);
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }

  async pesquisar(event: ISearchEvent) {
    this.resetSearchParam();
    this.loading = true;
    const { attributes, palavras } = event?.detail;
    const articles = await this.requestArticles(palavras, attributes, this.paginacao);
    if(articles && articles.length > 0){
    this.articles = articles;
    this.searchParams ={
      palavras,
      attributes,
      paginacao:this.paginacao,
    }
  }
}
  async resquestMoreArticles(event: any) {
    console.log(`event`, event);
    const { artigosAtuais } = event?.artigosAtuais;
    const {palavras, attributes, paginacao} = this.searchParams;
    paginacao.pagina += 1;
    const articles = await this.requestArticles(
      palavras,
      attributes,
      paginacao
    );
    if(articles && articles.length > 0){
      this.articles = [...this.articles, ...articles];
      this.searchParams ={
        palavras,
        attributes,
        paginacao
      }
      this.articles = [...this.articles, ...articles];
      event.IonEvent.target.complete();
    }
  }

  async requestArticles(palavras: string, attributes: IOptionSearch[], paginacao: any) {
   this.loading = true;
    try {
      if (palavras) {
        const articles = await this.searchService.searchMock(
          palavras,
          attributes,
          paginacao
          );
        articles;
        this.remove_img()
        return articles;
      }
    } catch (e: any) {
      console.log(`e`, e);
      const toast = await this.apiResponseProvider.error(
        e.message,
        'Erro ao pesquisar',
        'toast'
      );
   } finally {
      this.loading = false;
    }
  }

  remove_img(event?: any) {
    this.imgsEl?.nativeElement.classList.add('animate');
  }

  resetSearchParam(){
    this.paginacao.pagina = 1;
    this.paginacao.limite = 100;
    this.searchParams = {
      palavras: '',
      attributes: [],
      paginacao: this.paginacao,
    }
  }

}
