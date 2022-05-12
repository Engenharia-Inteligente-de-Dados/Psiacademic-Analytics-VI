import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultsApiService } from './consults-api.service';
import { IArticle } from '../articles/article.interfaces';
import { IrequestMoreDataEvent } from '../../shared/components/search-result/search-result.interface';
import { IPagination } from '../../shared/interfaces/pagination.interface';
import { styleScrollbars } from 'src/app/shared/utils/customScroll';
import { IConsulta, IOptionsSelectConsulta } from '../../shared/interfaces/consulta.interface';
import { ApiResponseProvider } from '../../shared/providers/api-response.provider';
import { ConsultType, ViewType } from '../../shared/enums/types.enums';

@Component({
  selector: 'app-consults',
  templateUrl: './consults.component.html',
  styleUrls: ['./consults.component.scss']
})
export class ConsultsComponent implements OnInit {

  public tipo: string;
  public options: IOptionsSelectConsulta = {
    anosOptions: [],
    transtornoOptions: [],
    repositorioOptions: []
  };
  public articles: IArticle[];
  public paginacao: IPagination
  public form: IConsulta;
  public loading: boolean = true;
  constructor(
    private route: ActivatedRoute,
    private consultApi: ConsultsApiService,
    private apiResponse: ApiResponseProvider,
    private ref: ChangeDetectorRef
    ) {
    this.route.params.subscribe(params => {
        this.tipo = params.tipo;
        this.form = {}
        this.articles = []
        if(this.tipo == ConsultType.Transtornos){
          this.apiResponse.info(`Ainda estamos mexendo nessa parte ok?`, `Em Desenvolvimento`);
        }
        console.log(this.tipo);
        if(this.options.anosOptions.length === 0 || this.options.repositorioOptions.length === 0){
        this.getListas()
        }
      });
  }

  ngOnInit(): void {
    this.novaPesquisa()
  }

  ngAfterViewInit(): void {
    const scrollCustom = document.querySelector('#scrollCustom');
    styleScrollbars(scrollCustom)
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }

  async getListas(){
    this.loading = true;
    try{
      const getAnos = await this.consultApi.getAnos();
      this.options.anosOptions = [];
      this.options.repositorioOptions = [];
      getAnos.forEach(element => {
        element._id != null ? this.options.anosOptions.push(element._id) : false;
      });
      this.options.anosOptions.sort(this.sort);
      const getRepositorios =  await this.consultApi.getRepositorios();
      getRepositorios.forEach(element => {
        element._id != null ? this.options.repositorioOptions.push(element._id) : false;
      });
  }
  catch(err){
    this.apiResponse.error(`Erro ao buscar listas`);
    console.log(`error`,err)
  }finally{
      this.loading = false;
    }
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

  async requestMoreArticles(request: IrequestMoreDataEvent) {
    request.viewType == ViewType.list ? this.loading = true : null;
    this.ref.detectChanges();
    console.log(request)
    const param = this.form;
    param['pagina'] = request.paginacao.pagina;
    param[`limite`] = request.paginacao.limite;
    try {
      const resp = await this.consultApi.consulta(param, this.tipo);
      if(request.viewType===ViewType.card){
        this.articles = [...request.artigosAtuais, ...resp.artigos];
        request.IonEvent.target.complete();
      }else{
        this.articles = resp.artigos;
        this.loading = false;
      }
      this.paginacao = resp.paginacao;
    } catch (error) {
      console.log(`error`,error)
      this.loading = false;
    }
    this.ref.detectChanges();

  }

  formRecivie(form){
    this.form = form;
  }

  private sort(a,b){
    return a - b;
  }
}
