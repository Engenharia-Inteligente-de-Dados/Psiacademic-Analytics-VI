import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SearchService } from 'src/app/shared/services/Search.service';
import { IArticle, ISearchEvent } from './article.interfaces';
import { ApiResponseProvider } from '../../shared/providers/api-response.provider';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  @ViewChild('imgsEl') imgsEl:ElementRef | undefined;
  public search_init = false
  public paginacao = {
    pagina: 1,
    limite: 100,
  }
  public articles?: IArticle[]

  constructor(
    private searchService: SearchService,
    private apiResponseProvider: ApiResponseProvider,
    ) { }

  ngOnInit(): void {
  }

  async pesquisar(event:ISearchEvent){
    console.log(event)
    const {attributes,search} = event?.detail

    try{
      if(search){
       const articles  = await this.searchService.search(search, attributes, this.paginacao)
      }
    }
    catch(e:any){
      console.log(e)
      const toast = await this.apiResponseProvider.error(e.message, 'Erro ao pesquisar','toast')
      console.log(toast)
    }
  }

  remove_img(event:any){
    if(this.search_init){
      console.log(this.imgsEl?.nativeElement)
      this.imgsEl?.nativeElement.classList.add('animate_fadeOutUp')
    }

  }
}
