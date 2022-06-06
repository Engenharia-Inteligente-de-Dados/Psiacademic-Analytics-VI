import { Injectable } from '@angular/core';
import { ChartTypejs } from '../enums/chartTypes.enum';
import {
  IChart,
  IChartActions,
  IChartjsOptions,
} from '../interfaces/chart.interface';
import { StorageProvider } from '../providers/storage.provider';
@Injectable({
  providedIn: 'root',
})
export class ChartService {
  constructor(private storage: StorageProvider) {}

  public async getChart(chart: IChart): Promise<IChart> {
    return this.storage.get(`chart-${chart.Id}`);
  }

  public setChart(chart: IChart): void {
    this.storage.set(`chart-${chart.Id}`, chart);
  }

  public padronizerChart(data: any, targetKey: string, targetValue: string) {}
}
