import { Component, OnInit } from '@angular/core';
import { Icharts } from 'src/app/shared/interfaces/chart.interfaces';
import { ChartsManageService } from '../../shared/services/charts-manage.service';
import { LISTCHARTS } from './analytics.mock';
import { Ichart } from '../../shared/interfaces/chart.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  public chartList:Icharts = []

  constructor(
    private chartsManageService:ChartsManageService,
    private route:Router
    ) {
    this.chartsManageService.charts = LISTCHARTS
  }

  ngOnInit(): void {
    this.chartList = this.chartsManageService.charts
  }

  public getChartList() {
    this.chartsManageService.chartList$.subscribe(res => {
      this.chartList = res
    })
  }


  redirect(event:any,index:number) {
    console.log(index)
    this.route.navigate([`public/analytics/${index}`])
  }

}
