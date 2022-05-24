import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { AnalyticsAPIService } from 'src/app/modules/analytics/analytics-api.service';
import { IChart, Icharts } from '../interfaces/chart.interfaces';
import { ApiResponseProvider } from '../providers/api-response.provider';
import { ChartProvider } from '../providers/charts.provider';
import { StorageProvider } from '../providers/storage.provider';
import { ordenaObjeto, percorrerArray } from '../utils/arrayUtils';
import { ChartType } from '../enums/chartTypes.enum';
import { ListasProvider } from '../providers/listas.provider';
import { TOTAL_ANOS_REP } from '../consts/analytics.urls';
import { paramsValidate } from '../utils/http.utils';
import { formatTitle } from '../utils/util';

@Injectable({
  providedIn: 'root',
})
export class ChartsManageService {
  public chartList$: Subject<Icharts> = new Subject<Icharts>();
  private _chartsList: Icharts = [];
  constructor(
    private analyticsAPI: AnalyticsAPIService,
    private apiResponse: ApiResponseProvider,
    private chartProvider: ChartProvider,
    private storage:StorageProvider,
    private listasProvider:ListasProvider
  ) {
    this.init();
  }

 private async init(): Promise<void> {
  const chart = await this.getCharts();
  if(chart){
    this.setCharts(chart);
  }
}

  public async setCharts(charts: Icharts): Promise<void> {
    this.storage.set('charts', charts);
    this._chartsList = charts;
    this.chartList$.next(this._chartsList);
  }
  public async getCharts(): Promise<Icharts> {
    if(this._chartsList.length === 0){
      const list = await this.storage.get<Icharts>('charts')
      if(list?.length > 0){
      this.setCharts(list);
      return this._chartsList;
      }
      else{
        this.getDefaultCharts();
      }
    }
    return this._chartsList;
  }

  public async getchartByIndex(index: number): Promise<IChart> {
    const charts = await this.getCharts();
    return charts[index];
  }

  public async getChartById(id: string) {
    const charts = await this.getCharts();
    return charts.find((chart) => chart.id === id);
  }

  public async addChart(chart: IChart) {
    const charts = await this.getCharts();
    const index = charts.findIndex((c) => c.id === chart.id)
    if(index>-1){
      return;
    }else{
      charts.push(chart);
      this.setCharts(charts);
    }
  }

  public async updatedChart(chart: IChart){
    const charts = await this.getCharts();
    const index = charts.findIndex((c) => c.id === chart.id)
    if(index>-1){
      charts[index] = chart;
      this.setCharts(charts);
    }
    else{
      this.addChart(chart);
    }

  }

  public async removeChart(index: number) {
    const charts = await this.getCharts();
    charts.splice(index, 1);
    this.setCharts(charts);
  }


  public async getChartFiltrado(url:any,params:any){
    if(typeof params === 'string'){
      return await this.analyticsAPI.getChartFiltrado(url,params)
  }
  else{
    const param = paramsValidate(params);
    return await this.analyticsAPI.getChartFiltrado(url,param)
  }
}

  // TODO: REMOVER DAQUI E COLOCAR NO COMPONENT

  public formatChart(
    array: any[],
    config?: any,
    keys: string[] = [],
    defaultMessage: string = 'Não Definido'
  ): IChart {
    const chart = this.chartProvider.createChart(config);
    const arrayOrdenado = ordenaObjeto(array)
    const chartData = percorrerArray(arrayOrdenado, keys, defaultMessage);
    chart.chartData = chartData;
    return chart;
  }

  public async getDefaultCharts() {
   Promise.allSettled([
     await this.totalRepositoriosPorAno(),
     await this.totalTrabalhosPorRepositorios(),
     await this.totalAnos(),
  ])
  }

  public async totalRepositoriosPorAno(rep?:string) {
    const configTotalAno = {
      id:'1',
      chartType: ChartType.Line,
      chartTitle: `Histórico de trabalhos por repositórios - {0}`,
      originalTitle: `Histórico de trabalhos por repositórios - {0}`,
      columnNames: ['Ano', 'Total'],
      options: {},
      actions:{
        config: false,
        expand: true,
        filter:{
          inUse:true,
          value:[0],
          options: [],
        }
      },
      url: TOTAL_ANOS_REP,
      keys:[
        `_id`,
        `total`,
      ]
    };
    try {

      const {repositorios} = await this.listasProvider.getListas();
      configTotalAno.actions.filter.options = repositorios;
      configTotalAno.actions.filter.value = repositorios[0];
      if(!rep){
        rep = repositorios[0];
        configTotalAno.chartTitle = formatTitle(`Histórico de trabalhos por repositórios - {0}`, [rep]);
      }
      const response = await this.analyticsAPI.getTotalRepositoriosPorAnos(configTotalAno.actions.filter.value);
      const chart = this.formatChart(response, configTotalAno, configTotalAno.keys);
      this.updatedChart(chart);
    } catch (error) {
      this.apiResponse.error(
        error.toString(),
        'Erro ao buscar "Total trabalhos por ano"'
      );
    }
  }

  public async totalAnos() {
    const configTotalAno = {
      id:'2',
      chartType: 'Bar',
      chartTitle: 'Total trabalhos por ano',
      columnNames: ['Ano', 'Total'],
      options: {},
      actions:{
        config: false,
        expand: false,
      }
    };
    try {
      const response = await this.analyticsAPI.getAnos();
      const chart = this.formatChart(response, configTotalAno, [
        `_id`,
        `count`,
      ]);
      this.addChart(chart);
    } catch (error) {
      this.apiResponse.error(
        error.toString(),
        'Erro ao buscar "Total trabalhos por ano"'
      );
    }
  }

  public async totalTrabalhosPorRepositorios() {
    const configTotalAno = {
      id:'3',
      chartType: 'Bar',
      chartTitle: 'Total trabalhos por repositórios',
      columnNames: ['Repositórios', 'Total'],
      options: {},
      actions:{
        config: false,
        expand: false,
      },
      url:TOTAL_ANOS_REP
    };
    try {
      const resp = await this.analyticsAPI.getRepositorios();
      const chart = this.formatChart(resp, configTotalAno, [`_id`, `total`]);
      this.addChart(chart);
    } catch (error) {
      this.apiResponse.error(
        error.toString(),
        'Erro ao buscar "Total trabalhos por repositórios"'
      );
    }
  }
}
