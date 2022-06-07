import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultTitle, ConsultaType } from 'src/app/shared/enums/types.enums';
import { IOptionsSelectConsulta } from 'src/app/shared/interfaces/opcoes-select-consultas.interface';
import { IPagination } from 'src/app/shared/interfaces/pagination.interface';
import { ListasProvider } from 'src/app/shared/providers/listas.provider';
import { ConsultsApiService } from './consults-api.service';

@Component({
  selector: 'app-consults',
  templateUrl: './consults.component.html',
  styleUrls: ['./consults.component.scss'],
})
export class ConsultsComponent implements OnInit {
  private readonly genericTitle = 'Consultar Artigos Por {0}';
  private readonly avancadaTitle = 'Avançada';
  public Title: string;
  public options: IOptionsSelectConsulta = {
    anosOptions: [],
    transtornoOptions: [],
    repositorioOptions: [],
  };
  public articles: any[];
  public tipo: ConsultaType;
  public loading: boolean;
  public form: any = {};
  public paginacao: IPagination

  constructor(
    private route: ActivatedRoute,
    private consultApi: ConsultsApiService,
    private listasProvider: ListasProvider
  ) {
    this.route.params.subscribe((params) => {
      this.tipo = params.tipo;
      this.trataTitle();
      this.articles = [];
      console.log(this.tipo);
      if (this.tipo == ConsultaType.Transtornos) {
        console.info(
          `Ainda estamos mexendo nessa parte ok?`,
          `Em Desenvolvimento`
        );
      }
    });
    this.getListas();
  }

  ngOnInit(): void {}

  async getListas() {
    this.loading = true;
    try {
      const { anos, repositorios } = await this.listasProvider.getListas();
      this.options.anosOptions = [];
      this.options.repositorioOptions = [];
      this.options.anosOptions = anos;
      this.options.repositorioOptions = repositorios;
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  }

  async novaPesquisa(){
    const param = this.form;
    if(Object.keys(param).length == 0 ){
      return
    }
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

  private trataTitle(){
    if(this.tipo === ConsultaType.Avancada) {
      this.Title = this.avancadaTitle;
    }else{
      this.Title = this.genericTitle.replace('{0}', ConsultTitle[this.tipo]);
    }
  }
}
