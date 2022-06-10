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
  public artigos: any[];
  public tipo: ConsultaType;
  public loading: boolean;
  public loadingTable: boolean;

  public form: any = {};
  public paginacao: IPagination = {limite:10, pagina:1, total:0}
  private _controleNovaPesquisa = false

  public readonly atributosTabela = [
    { label: 'Título', key: 'titulo', primeiro: true },
    { label: 'Autores', key: 'autores' },
    // { label: 'Resumo', key: 'resumo' },
    { label: 'Repositório', key: 'repositorio' },
    { label: 'Tipo do Trabalho', key: 'tipo' },
    {label: 'Ações', key: 'actions', acoes:[
      {label: 'Detalhes', icon: 'fas fa-info-circle', id: 1},
      {label: 'Download', icon: 'fas fa-external-link', id: 2},
    ]},
  ]
  constructor(
    private route: ActivatedRoute,
    private consultApi: ConsultsApiService,
    private listasProvider: ListasProvider
  ) {
    this.route.params.subscribe((params) => {
      this.tipo = params.tipo;
      this.reset()
      this.trataTitle();
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
    try {
      this.loading = true;
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
    if(this._controleNovaPesquisa){
    return;
    }
    this._controleNovaPesquisa = true;
    param['pagina'] = this.paginacao.pagina;
    param[`limite`] = this.paginacao.limite;
    try {
      this.loadingTable = true;
      const resp = await this.consultApi.consulta(param, this.tipo);
      this.artigos = resp.artigos;
      this.paginacao = resp.paginacao;
    } catch (error) {
      console.log(`error`,error)
    } finally {
      this._controleNovaPesquisa = false;
      this.loadingTable = false;
    }
  }

  recivieForm(form:any){
    this.reset();
    this.form = form;
    this.novaPesquisa();
  }

  requestMore(event){
    this.paginacao = {...event}
    this.novaPesquisa();
  }

  private trataTitle(){
    if(this.tipo === ConsultaType.Avancada) {
      this.Title = this.avancadaTitle;
    }else{
      this.Title = this.genericTitle.replace('{0}', ConsultTitle[this.tipo]);
    }
  }

  private reset(){
    this.form = {};
    this.artigos = [];
    this.paginacao.limite = 10;
    this.paginacao.pagina = 1;
    this.paginacao.total = 0
  }
}
