import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IChart } from '../../../shared/interfaces/chart.interface';
import { Colors } from 'src/app/shared/enums/Colors';
import {
  formatChartData,
  formtData,
  replaceStringIndex,
} from '../../../shared/utils/formtUtil';
import { UserFeedbackProvider } from '../../../shared/providers/users-feedback.provider';
import { CARD_ESTATICO } from './card-estatico.cont';
import { DashboardPublicoElementsName } from './dashboard-publicoElementsName.enum';
import { SaudePublicaAPIService } from '../saude-publica-api.service';
import { ListasProvider } from 'src/app/shared/providers/listas.provider';
import { CASOS_MORBIDADE_ATENDIMENTO, CASOS_POR_ESTADO, DADOS_CONTEUDO } from 'src/app/shared/const/chart.const';
import { DADOS_POR_CONTEUDO_ATENDIMENTO, DADOS_POR_CONTEUDO_MORBIDADE, NUMERO_ATENDIMENTO_ANO, NUMERO_CASO_ESTADO_DATASUS, NUMERO_CASO_ESTADO_SISAB, NUMERO_CASO_MORBIDADE_ANO } from '../../analytics/analytics.urls';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard-publico',
  templateUrl: './dashboard-publico.component.html',
  styleUrls: ['./dashboard-publico.component.scss'],
})
export class DashboardPublicoComponent implements OnInit {
  public loading = false;
  public Charts: { [key: string]: IChart } = {};
  public DashPubElem = DashboardPublicoElementsName;
  public Card: { [key: string]: any } = {};
  private readonly _defaultSelect = `Selecione uma Opção`;
  @Input() label: string = ''
  @Input() options: any[];
  @Input() selectedDefault?: string = this._defaultSelect;
  @Output() optionChange = new EventEmitter<any>();
  selectedConteudo: string;
  selectedEstado: string;
  selectedMorbidade: string;
  selectedTipoAtendimento: string;
  conteudos: string[] = [];
  estados: string[] = [];
  morbidades: string[] = [];
  tipoAtendimentos: string[] = [];

  constructor(
    private saudePublicaApi: SaudePublicaAPIService,
    private def: ChangeDetectorRef,
    private feedback: UserFeedbackProvider,
    private ListasProvider: ListasProvider,
  ) {}

  ngOnInit(): void {
    this.getDefaultCharts();
    this.selectedConteudo = this.selectedDefault;

    const listas = this.ListasProvider.getListasP();
    this.conteudos = listas.conteudo;
    this.estados = listas.estado;
    this.morbidades = listas.morbidades;
    this.tipoAtendimentos = listas.tipoAtendimento;
}
  onOptionChange(event: any) {
    if (this.selectedConteudo !== this._defaultSelect) {
      this.optionChange.emit({ newValue: this.selectedConteudo, label:this.label });
  }
}
  ngOnDestroy(): void {
    this.Charts = {};
  }
  onConteudoChange(event: any) {
    this.selectedConteudo = event.newValue;
    if(this.selectedConteudo === 'Internações'){
      this.dadosPorConteudoEvent(event, this.Charts[this.DashPubElem.dadosPorConteudo]);
    }
  }
  
  onEstadoChange(event: any){
    this.selectedEstado = event.newValue;
    if(this.selectedConteudo === 'Internações' || this.selectedConteudo === 'Atenção básica'){
      this.dadosPorConteudoEvent(event, this.Charts[this.DashPubElem.dadosPorConteudo]);
    }
  }
  
  onMorbidadeChange(event: any) {
    this.selectedMorbidade = event.newValue;
    if(this.selectedConteudo === 'Internações'){
      this.dadosPorConteudoEvent(event, this.Charts[this.DashPubElem.dadosPorConteudo]);
    }
  }
  
  onTipoAtendimentoChange(event: any) {
    this.selectedTipoAtendimento = event.newValue;
    if(this.selectedConteudo === 'Atenção básica'){
      this.dadosPorConteudoEvent(event, this.Charts[this.DashPubElem.dadosPorConteudo]);
    }
  }

  async qtdCasosPorEstado() {
      const chart = structuredClone(CASOS_POR_ESTADO);
    try {
      const { conteudo, anos } =  this.ListasProvider.getListasP();
      const filterObj = {
        conteudos: {
          arr: conteudo,
          first: conteudo[0],
        },
        anos: {
          arr: anos,
          first: anos[0],
        },
      };

      await Object.keys(filterObj).forEach((value, index) => {
        chart.Actions.Filters[index].Value = filterObj[value].first;
        chart.Actions.Filters[index].Options = filterObj[value].arr;
      });
      let resp = await this.saudePublicaApi.getChartFiltrado_P(chart.Url);
      resp = resp.filter((item) => {
        return item.ano == anos[0];
      })
      const { labels, dataset } = formatChartData(resp, chart.Keys, chart.DatasetConfig);
      chart.Chart.data.labels = labels;
      dataset.label ="Estado"
      chart.Chart.data.datasets.push(dataset);
      this.Charts[this.DashPubElem.qtdCasosPorEstado] = { ...chart };
    } catch (error: any) {
      this.feedback.error(error);
      console.log(error)
    }
  }

  async qtdCasosPorEstadoEvent(event?: any, changedChart?:IChart) {
    const chart = changedChart
    this.Charts[this.DashPubElem.qtdCasosPorEstado].Loading = true
    try {
      if(event.newValue === 'Internações'){
        chart.Url =  NUMERO_CASO_ESTADO_DATASUS;
        chart.Keys = { labelName: 'siglaestado', valueName: 'total_casos', dinamic: true };
      }
      if(event.newValue === 'Atenção básica'){
        chart.Url =  NUMERO_CASO_ESTADO_SISAB;
        chart.Keys = { labelName: 'siglaestado', valueName: 'total_atendimentos', dinamic: true };
      }
      let resp = await this.saudePublicaApi.getChartFiltrado_P(chart.Url);
      resp = resp.filter((item) => {
        if (event.label === 'Ano') {
          return item.ano == event.newValue;
        }
        else{
          return item.ano == chart.Actions.Filters[1].Value
        }
      })
      const { labels, dataset } = formatChartData(resp, chart.Keys, chart.DatasetConfig);
      chart.Chart.data.labels = labels;
      dataset.label ="Estados"
      chart.Chart.data.datasets[0] = dataset;
      this.Charts[this.DashPubElem.qtdCasosPorEstado] = { ...chart };
      this.Charts[this.DashPubElem.qtdCasosPorEstado].Loading = false
      this.def.detectChanges()
    } catch (error: any) {
      this.feedback.error(error);
      console.log(error)
    }
    this.def.detectChanges()
  }

  async qtdCasosPorMorbidadeAtendimento() {
    const chart = structuredClone(CASOS_MORBIDADE_ATENDIMENTO);
    try {
      const { conteudo, estado, morbidades} = this.ListasProvider.getListasP();
      const filterObj = {
        conteudos: {
          arr: conteudo,
          first: conteudo[0],
        },
        estados: {
          arr: estado,
          first: estado[0],
        },
        morbidade: {
          arr: morbidades,
          first: morbidades[0],
        },
        // tipoDeAtendimento: {
        //   arr: tipoAtendimento,
        //   first: tipoAtendimento[0],
        // },
      };
      await Object.keys(filterObj).forEach((value, index) => {
        chart.Actions.Filters[index].Value = filterObj[value].first;
        chart.Actions.Filters[index].Options = filterObj[value].arr;
      });
      let resp = await this.saudePublicaApi.getChartFiltrado_P(chart.Url);
      console.log("Dados da API:", resp);
      resp = resp.filter(item => {
        return item.estado.toLowerCase() ===  filterObj.estados.first.toLowerCase() 
        && item.morbidade.toLowerCase() === filterObj.morbidade.first.toLowerCase() 
      });
      const { labels, dataset } = formatChartData(resp, chart.Keys, chart.DatasetConfig);
      chart.Chart.data.labels = labels;
      dataset.label ="Estado"
      chart.Chart.data.datasets.push(dataset);
      console.log("Datasets", dataset)
      this.Charts[this.DashPubElem.qtdCasosPorMorbidadeAtendimento] = { ...chart };
    } catch (error: any) {
      this.feedback.error(error);
      console.log(error)
    }
  }

  async qtdCasosPorMorbidadeAtendimentoEvent(event?: any, changedChart?:IChart) {
    const chart = changedChart
    //console.log(chart.Actions.Filters)
    this.Charts[this.DashPubElem.qtdCasosPorMorbidadeAtendimento].Loading = true
    
    try {
      if(event.newValue === 'Internações'){
        chart.Url =  NUMERO_CASO_MORBIDADE_ANO;
        chart.Keys = { labelName: 'ano', valueName: 'total_casos', dinamic: true };
        
      }
      // if(event.newValue === 'Atenção básica'){
      //   chart.Url =  NUMERO_ATENDIMENTO_ANO;
      //   chart.Keys = { labelName: 'ano', valueName: 'total_consultas_agendadas', dinamic: true,
      //   additionalKey1: 'total_consultas_no_dia',
      //   additionalKey2: 'total_atendimentos_urgencia' };
      // }
     
      let resp = await this.saudePublicaApi.getChartFiltrado_P(chart.Url);
      resp = resp.filter(item => {
        switch (event.label) {
          case 'Estado':
            return item.estado === event.newValue;
          case 'Morbidade':
            return item.morbidade === event.newValue;
          // case 'Tipo de atendimento':
          //   return item.tipo_atendimento === event.newValue;
          default:
            return item.estado === chart.Actions.Filters[1].Value &&
                   item.morbidade === chart.Actions.Filters[2].Value 
                  //  item.tipo_atendimento === chart.Actions.Filters[3].Value;
        }
      });
      
      const { labels, dataset } = formatChartData(resp, chart.Keys, chart.DatasetConfig);
      chart.Chart.data.labels = labels;
      dataset.label ="Anos"
      chart.Chart.data.datasets[0] = dataset;
      this.Charts[this.DashPubElem.qtdCasosPorMorbidadeAtendimento] = { ...chart };
      this.Charts[this.DashPubElem.qtdCasosPorMorbidadeAtendimento].Loading = false
      this.def.detectChanges()
      console.log(dataset)
    } catch (error: any) {
      this.feedback.error(error);
      console.log(error)
    }
    this.def.detectChanges()
  }

  async dadosPorConteudo() {
    const chart = structuredClone(DADOS_CONTEUDO);
    try {
      const { conteudo } = this.ListasProvider.getListasP();
      const filterObj = {
        conteudos: {
          arr: conteudo,
          first: conteudo[0],
        },
      };
      
      await Object.keys(filterObj).forEach((value, index) => {
        chart.Actions.Filters[index].Value = filterObj[value].first;
        chart.Actions.Filters[index].Options = filterObj[value].arr;
      });
      let resp = await this.saudePublicaApi.getChartFiltrado_P(chart.Url);
      resp = resp.filter((item) => {
        return item.conteudos == conteudo[0];
      })
      const { labels, datasetpie } = formatChartData(resp, chart.Keys, chart.DatasetConfig);
      chart.Chart.data.labels = labels;
      console.log("DATA", datasetpie)
      datasetpie.label ="Casos"
      chart.Chart.data.datasets.push(datasetpie); 
      this.Charts[this.DashPubElem.dadosPorConteudo] = { ...chart };
      //console.log("FINAL", this.Charts[this.DashPubElem.dadosPorConteudo])
    } catch (error: any) {
      this.feedback.error(error);
      console.log(error)
    }
  }

  async dadosPorConteudoEvent(event?: any, changedChart?:IChart) {
    const chart = changedChart
    this.Charts[this.DashPubElem.dadosPorConteudo].Loading = true
    try {
      if(event.newValue === 'Internações'){
        chart.Url =  DADOS_POR_CONTEUDO_MORBIDADE;
        chart.Keys = { labelName: 'morbidade', valueName: 'total_casos', dinamic: true };
      }
      if(event.newValue === 'Atenção básica'){
       chart.Url =  DADOS_POR_CONTEUDO_ATENDIMENTO;
       chart.Keys = { labelName: 'tipo_atendimento', valueName: 'total_casos', dinamic: true };
      }
      let resp = await this.saudePublicaApi.getChartFiltrado_P(chart.Url);
      resp = resp.filter((item) => {
        if (event.label === 'Conteúdo') {
          return item.conteudos == event.newValue;
        }
        else{
          return item.conteudos == chart.Actions.Filters[1].Value
        }
      })
      const { labels, datasetpie } = formatChartData(resp, chart.Keys, chart.DatasetConfig);
      chart.Chart.data.labels = labels;
      datasetpie.label ="Casos"
      chart.Chart.data.datasets[0] = datasetpie;
      this.Charts[this.DashPubElem.dadosPorConteudo] = { ...chart };
      this.Charts[this.DashPubElem.dadosPorConteudo].Loading = false
      this.def.detectChanges()
    } catch (error: any) {
      this.feedback.error(error);
      console.log(error)
    }
    this.def.detectChanges()
  }

  public async cardsEstaticos() {
    this.Card[this.DashPubElem.cardsEstaticos] = structuredClone(
      CARD_ESTATICO[this.DashPubElem.cardsEstaticos]
    );
    this.Card[this.DashPubElem.cardsEstaticos].Loading = true;
    try {
      const cards = await CARD_ESTATICO[
        this.DashPubElem.cardsEstaticos
      ].Card;
      this.Card[this.DashPubElem.cardsEstaticos].Card =
        cards;
      this.Card[this.DashPubElem.cardsEstaticos].Preview =
        cards.slice(0, 5);
    } catch (error) {
      this.feedback.error(error);
    } finally {
      this.Card[this.DashPubElem.cardsEstaticos].Loading = false;
    }
  }

  public async getDefaultCharts() {
    this.loading = true;
    try {
      await Promise.allSettled([
        this.qtdCasosPorEstado(),
        this.qtdCasosPorMorbidadeAtendimento(),
        this.dadosPorConteudo(),
      ]);
    } catch (error) {
      this.feedback.error(error);
    } finally {
      this.def.detectChanges();
      this.loading = false;
    }
  }

  private ajustParam(filters,newValues?){
    const params = {}
    filters.forEach(filter => {
      if(filter.Label === newValues?.label){
        params[filter.Key] = newValues?.newValue
      }
      else{
        params[filter.Key] = filter.Value ;
      }
    });
    return params
  }
}
