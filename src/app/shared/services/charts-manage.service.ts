import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ichart, Icharts } from '../interfaces/chart.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ChartsManageService {
  public chartList$: Subject<Icharts> = new Subject<Icharts>();
  private _chartsList:Icharts = [];
  constructor() { }

  set charts(charts: Icharts) {
    this._chartsList = charts;
    this.chartList$.next(this._chartsList);
  }

  get charts(): Icharts {
    return this._chartsList;
  }

  public getchartByIndex(index:number):Ichart {
      return this._chartsList[index];
  }

  public getChartById(id: string):Ichart | undefined {
    return this._chartsList.find(chart => chart.id === id);
  }

  public addChart(chart: Ichart) {
    this._chartsList.push(chart);
    this.chartList$.next(this._chartsList);
  }

  public removeChart(index: number) {
    this._chartsList.splice(index, 1);
    this.chartList$.next(this._chartsList);
  }
}
