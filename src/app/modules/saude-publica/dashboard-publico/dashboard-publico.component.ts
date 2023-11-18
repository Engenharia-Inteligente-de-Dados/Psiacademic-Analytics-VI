import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IChart } from '../../../shared/interfaces/chart.interface';
import { Colors } from 'src/app/shared/enums/Colors';
import {
  formatChartData,
  formtData,
  replaceStringIndex,
} from '../../../shared/utils/formtUtil';
import { UserFeedbackProvider } from '../../../shared/providers/users-feedback.provider';
import { DashboardPublicoElementsName } from './dashboard-publicoElementsName.enum';
import { SaudePublicaAPIService } from '../saude-publica-api.service';
import { ListasProvider } from 'src/app/shared/providers/listas.provider';
import { CASOS_POR_ESTADO } from 'src/app/shared/const/chart.const';
import { ESTADOS_TESTE } from './teste.const';
import { NUMERO_CASO_ESTADO } from '../../analytics/analytics.urls';
@Component({
  selector: 'app-dashboard-publico',
  templateUrl: './dashboard-publico.component.html',
  styleUrls: ['./dashboard-publico.component.scss'],
})
export class DashboardPublicoComponent implements OnInit {
  public loading = false;
  public Charts: { [key: string]: IChart } = {};
  public DashPubElem = DashboardPublicoElementsName;

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
      console.log(conteudo,anos)
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
      chart.Title = chart.Title.replace('{0}', filterObj.conteudos.first).replace(
        '{1}',
        filterObj.anos.first
      );
      chart.Chart.data.labels = labels;
      dataset.label ="estados"
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
      if(event.newValue === 'internações'){
        chart.Url =  NUMERO_CASO_ESTADO

      }
      let resp = await this.saudePublicaApi.getChartFiltrado_P(chart.Url);
      resp = resp.filter((item) => {
        if (event.label === `Ano`) {
          return item.ano == event.newValue;
        }
        else{
          return item.ano == chart.Actions.Filters[1].Value
        }
      })
      const { labels, dataset } = formatChartData(resp, chart.Keys, chart.DatasetConfig);
      chart.Chart.data.labels = labels;
      dataset.label ="estados"
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
