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
import { CASOS_MORBIDADE_ATENDIMENTO, CASOS_POR_ESTADO } from 'src/app/shared/const/chart.const';
import { NUMERO_ATENDIMENTO_ANO, NUMERO_CASO_ESTADO_DATASUS, NUMERO_CASO_ESTADO_SISAB, NUMERO_CASO_MORBIDADE_ANO } from '../../analytics/analytics.urls';
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
  constructor(
    private saudePublicaApi: SaudePublicaAPIService,
    private def: ChangeDetectorRef,
    private feedback: UserFeedbackProvider,
    private ListasProvider: ListasProvider,
  ) {}

  ngOnInit(): void {
    this.getDefaultCharts();
  }
  ngOnDestroy(): void {
    this.Charts = {};
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
      chart.Title = chart.Title.replace('{0}', filterObj.conteudos.first)
      .replace('{1}', filterObj.anos.first);
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
    console.log(chart.Actions.Filters)
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
      const { conteudo, siglaestado, morbidades, tipoAtendimento } = this.ListasProvider.getListasP();
      const filterObj = {
        conteudos: {
          arr: conteudo,
          first: conteudo[0],
        },
        siglas: {
          arr: siglaestado,
          first: siglaestado[0],
        },
        morbidade: {
          arr: morbidades,
          first: morbidades[0],
        },
        tipoDeAtendimento: {
          arr: tipoAtendimento,
          first: tipoAtendimento[0],
        },
      };
      await Object.keys(filterObj).forEach((value, index) => {
        chart.Actions.Filters[index].Value = filterObj[value].first;
        chart.Actions.Filters[index].Options = filterObj[value].arr;
      });
      let resp = await this.saudePublicaApi.getChartFiltrado_P(chart.Url);
      resp = resp.filter(item => {
        const filtroConteudo = item.conteudo === filterObj.conteudos.first;
        const filtroSiglaEstado = item.siglaestado === filterObj.siglas.first;
        const filtroMorbidade = item.morbidade === filterObj.morbidade.first;
        const filtroTipoAtendimento = item.tipoAtendimento === filterObj.tipoDeAtendimento.first;
      
        // Retorna true se todas as condições forem satisfeitas
        return filtroConteudo && filtroSiglaEstado && filtroMorbidade && filtroTipoAtendimento;
      });
      const { labels, dataset } = formatChartData(resp, chart.Keys, chart.DatasetConfig);
      chart.Title = chart.Title.replace('{0}', filterObj.conteudos.first)
                              .replace('{1}', filterObj.siglas.first)
                              .replace('{2}', filterObj.morbidade.first)
                              .replace('{3}', filterObj.tipoDeAtendimento.first);
      chart.Chart.data.labels = labels;
      dataset.label ="Ano"
      chart.Chart.data.datasets.push(dataset);
      this.Charts[this.DashPubElem.qtdCasosPorMorbidadeAtendimento] = { ...chart };
    } catch (error: any) {
      this.feedback.error(error);
      console.log(error)
    }
  }

  async qtdCasosPorMorbidadeAtendimentoEvent(event?: any, changedChart?:IChart) {
    const chart = changedChart
    console.log(chart.Actions.Filters)
    this.Charts[this.DashPubElem.qtdCasosPorMorbidadeAtendimento].Loading = true
    try {
      if(event.newValue === 'Internações'){
        chart.Url =  NUMERO_CASO_MORBIDADE_ANO;
        chart.Keys = { labelName: 'ano', valueName: 'total_casos', dinamic: true };
      }
      if(event.newValue === 'Atenção básica'){
        chart.Url =  NUMERO_ATENDIMENTO_ANO;
        chart.Keys = { labelName: 'ano', valueName: 'total_consultas_agendadas', dinamic: true, 
        additionalKey1: 'total_consultas_no_dia',
        additionalKey2: 'total_atendimentos_urgencia' };
      }
      let resp = await this.saudePublicaApi.getChartFiltrado_P(chart.Url);
      resp = resp.filter(item => {
        switch (event.label) {
          case 'Estado':
            return item.siglaestado === event.newValue;
          case 'Morbidade':
            return item.morbidade === event.newValue;
          case 'Tipo de atendimento':
            return item.tipo_atendimento === event.newValue;
          default:
            return item.siglaestado === chart.Actions.Filters[1].Value &&
                   item.morbidade === chart.Actions.Filters[2].Value &&
                   item.tipo_atendimento === chart.Actions.Filters[3].Value;
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
