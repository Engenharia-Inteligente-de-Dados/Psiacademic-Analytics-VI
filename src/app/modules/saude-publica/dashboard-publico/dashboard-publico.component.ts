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
      const { conteudo, ano } = await this.ListasProvider.getListasP();
      const filterObj = {
        conteudos: {
          arr: conteudo,
          first: conteudo[0],
        },
        anos: {
          arr: ano,
          first: ano[0],
        },
      };
      await Object.keys(filterObj).forEach((value, index) => {
        chart.Actions.Filters[index].Value = filterObj[value].first;
        chart.Actions.Filters[index].Options = filterObj[value].arr;
      });
      let params = this.ajustParam(chart.Actions.Filters)
      const resp = await this.saudePublicaApi.getChartFiltrado_P(chart.Url,params);
      console.log(resp)
      const { labels, dataset } = formatChartData(resp, chart.Keys, chart.DatasetConfig);
      chart.Title = chart.Title.replace('{0}', filterObj.conteudos.first).replace(
        '{1}',
        filterObj.anos.first
      );

      chart.Chart.data.labels = labels;
      dataset.label ="Casos"
      chart.Chart.data.datasets.push(dataset);
      this.Charts[this.DashPubElem.qtdCasosPorEstado] = { ...chart };
    } catch (error: any) {
      this.feedback.error(error);
      console.log(error)
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

  async filter(event, chart: IChart, propertyName: string, index: number) {
    const { newValue,label } = event;
    const { Url } = chart;
    const params = this.ajustParam(chart.Actions.Filters,{newValue,label})
    this.Charts[propertyName].Loading = true;
    try {
      const resp = await this.saudePublicaApi.getChartFiltrado_P(Url, params)
      const Actions = chart.Actions;
      const { labels, dataset } = formatChartData(resp, chart.Keys, chart?.DatasetConfig);
      if(chart?.DatasetConfig?.replaceTitle){
        chart.Title = chart.Title.replace(Actions.Filters[index].Value, newValue);
      }
      Actions.Filters[index].Value = newValue;
      chart.Chart.data.datasets[0] = dataset;
      if(chart.DatasetConfig?.multipleDataset){
        chart.Chart.data.datasets = dataset;
      }
      chart.Chart.data.labels = labels;
      chart.Actions = Actions;
      this.Charts[propertyName] = { ...chart };
    } catch (error) {
      this.feedback.error(error);
    } finally {
      this.Charts[propertyName].Loading = false;
    }
  }

}