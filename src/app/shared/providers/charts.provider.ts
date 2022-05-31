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

    public returnChartObj():IChart{
      return {
        id: '',
        chartTitle: '',
        originalTitle: '',
        chartData: [],
        chartType: [],
        columnNames: [] ,
        options: {},
        actions: {},
        url: '',
        keys: [],
      }
      }
}
