import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OPTIONS_CONSULT_FORM } from './consult-form/consult-form-const';
import { ConsultsApiService } from './consults-api.service';
import { IArticle } from '../articles/article.interfaces';
import { IrequestMoreDataEvent } from '../../shared/components/search-result/search-result.interface';
import { IPagination } from '../../shared/interfaces/pagination.interface';
import { styleScrollbars } from 'src/app/shared/utils/customScroll';
import { IConsulta } from '../../shared/interfaces/consulta.interface';

@Component({
  selector: 'app-consults',
  templateUrl: './consults.component.html',
  styleUrls: ['./consults.component.scss']
})
export class ConsultsComponent implements OnInit {

  public tipo: string;
  public options = OPTIONS_CONSULT_FORM;
  public articles: IArticle[];
  public paginacao: IPagination
  public form: IConsulta;
  constructor(
    private route: ActivatedRoute,
    private consultApi: ConsultsApiService
    ) {
     this.route.params.subscribe(params => {
        this.tipo = params.tipo;
        this.form = {}
        this.articles = []
        console.log(this.tipo);
      });
  }

  ngOnInit(): void {
    console.log(`ConsultsComponent`);
  }

  ngAfterViewInit(): void {
    const scrollCustom = document.querySelector('#scrollCustom');
    styleScrollbars(scrollCustom)
  }

  async novaPesquisa(){
    const param = this.form;
    param['pagina'] = 1;
    param[`limite`] = 10;
    try {
      const resp = await this.consultApi.consulta(param, this.tipo);
      this.articles = resp.artigos;
      this.paginacao = resp.paginacao;
    } catch (error) {
      console.log(`error`,error)
    }
  }

  async consultaAnosPeriodo(params){
    console.log(params);
  }

  formRecivie(form){
    console.log(form)
    this.form = form;
  }

  async requestMoreArticles(request: IrequestMoreDataEvent) {
    console.log(request)
    const param = this.form;
    param['pagina'] = request.paginacao.pagina;
    param[`limite`] = request.paginacao.limite;
    try {
      const resp = await this.consultApi.consulta(param, this.tipo);
      this.articles = [...request.artigosAtuais, ...resp.artigos];
      request.IonEvent.target.complete();
      this.paginacao = resp.paginacao;
    } catch (error) {
      console.log(`error`,error)
    }
  }
}
