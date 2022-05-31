import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AnalyticsAPIService } from 'src/app/modules/analytics/analytics-api.service';
import { IChart, Icharts } from '../interfaces/chart.interfaces';
import { StorageProvider } from '../providers/storage.provider';
import { paramsValidate } from '../utils/http.utils';

@Injectable({
  providedIn: 'root',
})
export class ChartsManageService {
  public chartList$: Subject<Icharts> = new Subject<Icharts>();
  private _chartsList: Icharts = [];
  constructor(
    private analyticsAPI: AnalyticsAPIService,
    private storage: StorageProvider,
 ) {}

  //  private async init(): Promise<void> {
  //   const chart = await this.getCharts();
  //   if(chart){
  //     this.setCharts(chart);
  //   }
  // }

  public async setCharts(charts: Icharts): Promise<void> {
    this.storage.set('charts', charts);
    this._chartsList = charts;
    this.chartList$.next(this._chartsList);
  }
  public async getCharts(): Promise<Icharts> {
    if (this._chartsList.length === 0) {
      const list = await this.storage.get<Icharts>('charts');
      if (list?.length > 0) {
        this._chartsList = list;
        this.setCharts(list);
        return this._chartsList;
      } else {
        return [];
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
    const index = charts?.findIndex((c) => c.id === chart.id);
    if (index > -1) {
      charts[index] = chart;
      return;
    } else {
      charts.push(chart);
      this.setCharts(charts);
    }
  }

  public async updatedChart(chart: IChart) {
    const charts = await this.getCharts();
    const index = charts?.findIndex((c) => c.id === chart.id);
    if (index > -1) {
      charts[index] = chart;
      this.setCharts(charts);
    } else {
      this.addChart(chart);
    }
  }

  public async removeChart(index: number) {
    const charts = await this.getCharts();
    charts.splice(index, 1);
    this.setCharts(charts);
  }

  public async getChartFiltrado(url: any, params: any) {
    if (typeof params === 'string') {
      return await this.analyticsAPI.getChartFiltrado(url, params);
    } else {
      const param = paramsValidate(params);
      return await this.analyticsAPI.getChartFiltrado(url, param);
    }
  }

  async totalTrabalhoDeRepositorios() {
    return await this.analyticsAPI.getRepositorios();
  }
  async getTotalAnos() {
    return await this.analyticsAPI.getAnos();
  }
}
