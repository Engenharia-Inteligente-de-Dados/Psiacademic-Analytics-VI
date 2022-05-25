import { Component, OnInit, ChangeDetectorRef, OnDestroy, AfterContentInit, AfterViewInit } from '@angular/core';
import { Icharts } from 'src/app/shared/interfaces/chart.interfaces';
import { ChartsManageService } from '../../shared/services/charts-manage.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { formatTitle } from '../../shared/utils/util';
import { LoadingProvider } from '../../shared/providers/loading.provider';
import { ApiResponseProvider } from '../../shared/providers/api-response.provider';
import { TOTAL_ANOS_REP } from 'src/app/shared/consts/analytics.urls';
import { ListasProvider } from '../../shared/providers/listas.provider';
import { ChartProvider } from '../../shared/providers/charts.provider';
import { ChartType } from 'angular-google-charts';
import { TOTAL_TRABALHO_POR_REP, TITULO_TOTAL_TRABALHO_POR_REP, TOTAL_TRABALHOS_POR_REP, TOTAL_ANOS } from './analytics.const';
import { formtData } from 'src/app/shared/utils/formtUtil';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
})
export class AnalyticsComponent implements OnInit, OnDestroy,AfterViewInit {
  public chartList: Icharts = [];
  private chartListSubscribtion: Subscription;
  public loading = false;

  actions = {
    config: false,
    expand: true,
  };
  constructor(
    private chartsManageService: ChartsManageService,
    private loadingProvider: LoadingProvider,
    private def: ChangeDetectorRef,
    private listasProvider: ListasProvider,
    private chartProvider: ChartProvider,
    private route: Router,
    private apiResponse: ApiResponseProvider
  ) {}

  ngOnInit(): void {
    this.init();
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.chartListSubscribtion.unsubscribe();
  }

  async init(){
    this.chartList = await this.chartsManageService.getCharts()
    if(this.chartList.length === 0){
      await this.getDefaultCharts();
    }
  }

  public async getDefaultCharts() {
    const load = await  this.loadingProvider.loading();
    load.present();
    try {
      Promise.allSettled([
        await this.qtdTrablhosEmAnosPorRepositorio(),
        await this.totalTrabalhosPorRepositorios(),
        await this.totalAnos(),
      ])
      this.chartList = await this.chartsManageService.getCharts()

    } catch (error) {
      this.apiResponse.error('Error','Algo de inesperado aconteceu'
      );
    } finally {
      this.def.detectChanges()
      load.dismiss();
    }

   }

   public async qtdTrablhosEmAnosPorRepositorio() {
     let chart = this.chartProvider.returnChartObj()
     chart = {...TOTAL_TRABALHO_POR_REP}
     try {
       const {repositorios} = await this.listasProvider.getListas();
       chart.actions.filter.options = repositorios;
       const rep = repositorios[0];
       chart.actions.filter.value = rep;
       chart.chartTitle = formatTitle(TITULO_TOTAL_TRABALHO_POR_REP, [rep]);
       const response = await this.chartsManageService.getChartFiltrado(chart.url, rep);
       chart.chartData = formtData(response, chart.keys);
       this.chartsManageService.updatedChart(chart);
     } catch (error) {
       this.apiResponse.error(
         error.toString(),
         'Erro ao buscar "Total trabalhos por ano"'
       );
     }
   }

   public async totalAnos() {
     let chart = this.chartProvider.returnChartObj()
     chart = {...TOTAL_ANOS}
     try {
       const response = await this.chartsManageService.getTotalAnos();
       chart.chartData = formtData(response, chart.keys);
       this.chartsManageService.addChart(chart);
     } catch (error) {
       this.apiResponse.error(
         error.toString(),
         'Erro ao buscar "Total trabalhos por ano"'
       );
     }
   }

   public async totalTrabalhosPorRepositorios() {
     let chart = this.chartProvider.returnChartObj()
     chart = {...TOTAL_TRABALHOS_POR_REP}
     try {
       const response = await this.chartsManageService.totalTrabalhoDeRepositorios();
       chart.chartData = formtData(response, chart.keys);
       this.chartsManageService.addChart(chart);
     } catch (error) {
       this.apiResponse.error(
         error.toString(),
         'Erro ao buscar "Total trabalhos por repositórios"'
       );
     }
   }

     async filter(event) {
     const { chart, newValue } = event;
     try {
       const resp = await this.chartsManageService.getChartFiltrado(
         chart.url,
         newValue
       );
       chart.chartTitle = formatTitle(chart.originalTitle, [newValue]);
       console.log(resp);
       chart.chartData = formtData(
         resp,
         chart.keys
       );
       this.chartsManageService.updatedChart(chart);
     } catch (error) {
       console.log(error);
     }
   }


  //TODO Adicionar Loading nessa tela
  redirect(event: any, index: number) {
    this.route.navigate([`public/analytics/${index}`]);
  }
}

