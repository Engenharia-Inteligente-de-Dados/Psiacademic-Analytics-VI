import { Injectable } from '@angular/core';
import { IChart } from '../interfaces/chart.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ChartProvider {
    constructor() { }

    private generateId(): number {
      return Math.floor(Math.random() * 1000);
    }

    public createChart(configChart:IChart):IChart{
      console.log(configChart)
      return {
        id: configChart.id || `${this.generateId()}`,
        chartType: configChart.chartType,
        chartData: configChart?.chartData || [],
        options: configChart.options,
        chartTitle: configChart.chartTitle || '',
        columnNames: configChart.columnNames,
        actions: configChart.actions,
        ...configChart,
      }
      }
}
