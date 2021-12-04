import {
  Component,
  ElementRef,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { SearchAPI } from 'src/app/shared/services/search-api.service';
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
    private searchAPI: SearchAPI,
    private apiResponseProvider: ApiResponseProvider
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const scrollCustom = document.querySelector('#scrollCustom');
    this.styleScrollbars(scrollCustom);
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
      if (attributes.length > 0) {
        const articles = await this.searchAPI.search(
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
  styleScrollbars(elmt: any) {
    const stylesheet = `
    ::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }

    ::-webkit-scrollbar-track {
      background: var(--psi-color-cinza-step-250);
    }

    ::-webkit-scrollbar-thumb {
      background: var(--psi-color-cinza-step-300);
      border-radius: 15px;

    }

    ::-webkit-scrollbar-thumb:hover {
      background: rgba(141, 141, 141, 0.727);
    }
    `;

    const styleElmt = elmt.shadowRoot.querySelector('style');

    if (styleElmt) {
      styleElmt.append(stylesheet);
    } else {
      const barStyle = document.createElement('style');
      barStyle.append(stylesheet);
      elmt.shadowRoot.appendChild(barStyle);
    }
  }


}
