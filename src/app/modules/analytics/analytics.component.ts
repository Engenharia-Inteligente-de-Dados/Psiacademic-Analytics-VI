import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Icharts } from 'src/app/shared/interfaces/chart.interfaces';
import { ChartsManageService } from '../../shared/services/charts-manage.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit,OnDestroy {

  public chartList:Icharts = [];
  private chartListSubscribtion: Subscription;
  public loading = false;
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

}
