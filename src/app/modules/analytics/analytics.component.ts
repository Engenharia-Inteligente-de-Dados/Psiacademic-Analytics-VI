import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Icharts } from 'src/app/shared/interfaces/chart.interfaces';
import { ChartsManageService } from '../../shared/services/charts-manage.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { formatTitle } from '../../shared/utils/util';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit,OnDestroy {

  public chartList:Icharts = [];
  private chartListSubscribtion: Subscription;
  public loading = false;

  actions = {
    config:false,
    expand:true,
  }
  constructor(
    private chartsManageService:ChartsManageService,
    private def : ChangeDetectorRef,
    private route:Router,
  ) {}

  ngOnInit(): void {
    this.getChartList()
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.chartListSubscribtion.unsubscribe()
  }

  //TODO Adicionar Loading nessa tela
  public async getChartList() {
    this.loading = true;
     this.chartListSubscribtion = this.chartsManageService.chartList$.subscribe(res => {
        this.chartList = res
        this.loading = false;
      },err => {
        console.log(err)
        this.loading = false;
      })

      if(!this.chartList.length) {
        this.chartList = await this.chartsManageService.getCharts()
        this.loading = false;
        this.def.detectChanges()
      }
    }


  redirect(event:any,index:number) {
    this.route.navigate([`public/analytics/${index}`])
  }

  async filter(event){
    const {chart, newValue} = event
    try {
      const resp  = await this.chartsManageService.getChartFiltrado(chart.url,newValue);
      chart.chartTitle = formatTitle(chart.originalTitle,[newValue])
      console.log(resp)
      const new_chart = this.chartsManageService.formatChart(resp,chart,chart.keys)
      this.chartsManageService.updatedChart(new_chart)
    } catch (error) {
      console.log(error)
    }
  }

}
