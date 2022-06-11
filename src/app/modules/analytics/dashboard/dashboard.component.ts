import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  TOTAL_ANOS_CHART,
  TOTAL_TRABALHOS_ANOS,
  TOTAL_TRABALHOS_REP_CHART,
} from 'src/app/shared/const/chart.const';
import { ListasProvider } from 'src/app/shared/providers/listas.provider';
import { ChartService } from '../../../shared/services/chart.service';
import { AnalyticsAPIService } from '../analytics-api.service';
import { formtData } from '../../../shared/utils/formtUtil';
import { IChart } from '../../../shared/interfaces/chart.interface';
import { Colors } from 'src/app/shared/enums/Colors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public loading = false;
  public Charts: IChart[] | any[] = [{}, {}, {}];
  public readonly TrabalhosEmAnosPorRepositorio = 0;
  public readonly TrabalhosPorRepositorios = 1;
  public readonly TotalAnos = 2;
  constructor(
    private chartProvider: ChartService,
    private analyticsApi: AnalyticsAPIService,
    private listasProvider: ListasProvider,
    private def: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getDefaultCharts();
  }
  async qtdTrabalhosEmAnosPorRepositorio() {
    const chart = TOTAL_ANOS_CHART;
    try {
      const { repositorios } = await this.listasProvider.getListas();
      const rep = repositorios[0];
      const resp = await this.analyticsApi.getChartFiltrado(chart.Url, rep);
      const data = formtData(resp, chart.Keys);
      chart.Title = chart.Title.replace('{0}', rep);
      chart.Actions.Filter.Value = rep;
      chart.Actions.Filter.Options = repositorios;
      chart.Chart.data.labels = data.labels;
      chart.Chart.data.datasets.push({
        data: data.values,
        fill: false,
        backgroundColor: Colors.Blue_Ardosia,
        borderColor: Colors.Blue_Ardosia,
        barThickness: 1,
        label: `Total`,
      });
      this.Charts[this.TrabalhosEmAnosPorRepositorio] = { ...chart };
    } catch (error) {
      console.log(error);
    }
  }

  async totalTrabalhosPorRepositorios() {
    const chart = TOTAL_TRABALHOS_REP_CHART;
    try {
      const resp = await this.analyticsApi.getRepositorios();
      const { labels, values } = formtData(resp, chart.Keys);
      chart.Chart.data.labels = labels;
      chart.Chart.data.datasets.push({
        data: values,
        fill: false,
        backgroundColor: Colors.Blue_Ardosia,
        borderColor: Colors.Blue_Ardosia,
        barThickness: 20,
        label: `Quantidade`,
      });
      this.Charts[this.TrabalhosPorRepositorios] = { ...chart };
    } catch (error) {
      console.log(error);
    }
  }

  async totalAnos() {
    const chart = TOTAL_TRABALHOS_ANOS;
    try {
      const resp = await this.analyticsApi.getAnos();
      const { labels, values } = formtData(resp, chart.Keys);
      chart.Chart.data.labels = labels;
      chart.Chart.data.datasets.push({
        data: values,
        fill: false,
        backgroundColor: Colors.Blue_Ardosia,
        borderColor: Colors.Blue_Ardosia,
        barThickness: 20,
        label: `Quantidade`,
      });
      this.Charts[this.TotalAnos] = { ...chart };
    } catch (error) {
      console.log(error);
    }
  }

  public async getDefaultCharts() {
    this.loading = true;
    try {
      Promise.allSettled([
        await this.qtdTrabalhosEmAnosPorRepositorio(),
        await this.totalTrabalhosPorRepositorios(),
        await this.totalAnos(),
      ]).catch((err) => {
        console.error(err);
      });
      // this.chartList = await this.chartsManageService.getCharts()
    } catch (error) {
      //this.userFeedback.error('Error','Algo de inesperado aconteceu'
    } finally {
      this.def.detectChanges();
      this.loading = false;
    }
  }

  async filter(event, chart: IChart, index: number) {
    const { newValue } = event;
    const { Url } = chart;
    this.Charts[index].Loading = true;
    try {
      const resp = await this.analyticsApi.getChartFiltrado(Url, newValue);
      const Actions = chart.Actions;
      const { labels, values } = formtData(resp, chart.Keys);
      chart.Title = chart.Title.replace(Actions.Filter.Value, newValue);
      Actions.Filter.Value = newValue;
      chart.Chart.data.datasets[0].data = values;
      chart.Chart.data.labels = labels;
      this.chartProvider.setChart(chart);
      chart.Actions = Actions;
      this.Charts[index] = { ...chart };
    } catch (error) {
      console.log(error);
    } finally {
      this.Charts[index].Loading = false;
    }
  }
}
