import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { AnalyticsAPIService } from 'src/app/modules/analytics/analytics-api.service';
import { Ichart, Icharts } from '../interfaces/chart.interfaces';
import { ApiResponseProvider } from '../providers/api-response.provider';
import { StorageProvider } from '../providers/storage.provider';

@Injectable({
  providedIn: 'root',
})
export class ChartsManageService {
  public chartList$: Subject<Icharts> = new Subject<Icharts>();
  private _chartsList: Icharts = [];
  constructor(
    private analyticsAPI: AnalyticsAPIService,
    private apiResponse: ApiResponseProvider,
    private storage:StorageProvider
  ) {
    this.init();
  }

 private async init(): Promise<void> {
  const chart = await this.storage.get<Icharts>('charts');
  if(chart){
    this.setCharts(chart);
  }
  await this.getDefaultCharts();
}

  public async setCharts(charts: Icharts): Promise<void> {
    this.storage.set('charts', charts);
    this._chartsList = charts;
    this.chartList$.next(this._chartsList);
  }
  public async getCharts(): Promise<Icharts> {
    if(this._chartsList.length === 0){
      const list = await this.storage.get<Icharts>('charts') ? await this.storage.get<Icharts>('charts') : await this.getDefaultCharts();
      this.setCharts(list);
    }
    return this._chartsList;
  }

  public async getchartByIndex(index: number): Promise<Ichart> {
    const charts = await this.getCharts();
    return charts[index];
  }

  public async getChartById(id: string) {
    const charts = await this.getCharts();
    return charts.find((chart) => chart.id === id);
  }

  public async addChart(chart: Ichart) {
    const charts = await this.getCharts();
    charts.push(chart);
    this.setCharts(charts);
  }

  public async removeChart(index: number) {
    const charts = await this.getCharts();
    charts.splice(index, 1);
    this.setCharts(charts);
  }

  private generateId(): number {
    return Math.floor(Math.random() * 1000);
  }

  private formatChart(
    array: any[],
    config?: any,
    keys: string[] = [],
    defaultMessage: string = 'Não Definido'
  ): Ichart {
    let chart: Ichart = {
      id: `${this.generateId()}`,
      chartType: config.type,
      chartData: [],
      options: config.options,
      chartTitle: config.chartTitle || '',
      columnNames: config.columnNames,
    };
    const chartData: any[][] = [];
    array.forEach((element) => {
      const row: any[] = [];
      keys.forEach((key) => {
        if (element[key] === undefined && element[key] === null) {
          element[key] = defaultMessage;
        }
        if (element[key] === '_id') {
          row.push(element[key]);
        } else {
          row.push({ v: element[key], f: element[key] });
        }
      });
      chartData.push(row);
    });

    chart.chartData = chartData;
    return chart;
  }

  public async getDefaultCharts() {
    const totalAnos = await this.totalAnos();
    const totalRepositorios = await this.totalTrabalhosPorRepositorios();
    let chartList: Icharts = [];
    await Promise.all([totalAnos, totalRepositorios]).then((charts) => {
      chartList = charts;
    });
    return chartList;
  }

  public async totalAnos() {
    const configTotalAno = {
      type: 'Bar',
      chartTitle: 'Total trabalhos por ano',
      columnNames: ['Ano', 'Total'],
      options: {},
    };
    try {
      const response = await this.analyticsAPI.getTrabalhosAnosOLD();
      const chart = this.formatChart(response, configTotalAno, [
        `_id`,
        `count`,
      ]);
      return chart;
    } catch (error) {
      this.apiResponse.error(
        error.toString(),
        'Erro ao buscar "Total trabalhos por ano"'
      );
    }
  }

  public async totalTrabalhosPorRepositorios() {
    const configTotalAno = {
      type: 'Bar',
      chartTitle: 'Total trabalhos por repositórios',
      columnNames: ['Repositórios', 'Total'],
      options: {},
    };
    try {
      const resp = await this.analyticsAPI.getTrabalhosRepositorioOLD();
      const chart = this.formatChart(resp, configTotalAno, [`_id`, `count`]);
      return chart;
    } catch (error) {
      this.apiResponse.error(
        error.toString(),
        'Erro ao buscar "Total trabalhos por repositórios"'
      );
    }
  }
}
