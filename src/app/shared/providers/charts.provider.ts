import { Injectable } from '@angular/core';
import { Ichart } from '../interfaces/chart.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ChartProvider {

    constructor() { }

    private generateId(): number {
      return Math.floor(Math.random() * 1000);
    }

    public createChart(configChart:Ichart):Ichart{
      return {
        id: `${this.generateId()}`,
        chartType: configChart.chartType,
        chartData: [],
        options: configChart.options,
        chartTitle: configChart.chartTitle || '',
        columnNames: configChart.columnNames,
      }
      }
}
