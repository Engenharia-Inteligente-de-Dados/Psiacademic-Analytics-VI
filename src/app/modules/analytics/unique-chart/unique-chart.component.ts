import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChartsManageService } from '../../../shared/services/charts-manage.service';
import { Ichart } from '../../../shared/interfaces/chart.interfaces';
import { ApiResponseProvider } from '../../../shared/providers/api-response.provider';

@Component({
  selector: 'app-unique-chart',
  templateUrl: './unique-chart.component.html',
  styleUrls: ['./unique-chart.component.scss']
})
export class UniqueChartComponent implements OnInit {
  private routeSub!: Subscription;
  public chart: Ichart | undefined;;
  public actions = {
    config: false,
    expand:false,
  };
  public loading = false;
  public paramsId: string
  private chartListSubscribtion: Subscription;

  constructor(
    private route: ActivatedRoute,
    private chartsManageService: ChartsManageService,
    private apiResponseProvider: ApiResponseProvider,
    private def : ChangeDetectorRef
  ) {
    this.loading = true;
    this.routeSub = this.route.params.subscribe(params => {
    this.paramsId = params.id;
     this.chartListSubscribtion = this.chartsManageService.chartList$.subscribe(list => {
        this.chart =  list[params.id] ? list[params.id] : undefined;

       this.chart.options = this.addOptions()
        this.loading = false;
      });
    });



  }

  ngOnInit(): void {
    this.getChart();
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
    this.chartListSubscribtion.unsubscribe();
  }
  public async getChart(){
    this.loading = true;
    if(!this.chart){
      try {
        this.chart = await this.chartsManageService.getchartByIndex(Number(this.paramsId)) ?
       await this.chartsManageService.getchartByIndex(Number(this.paramsId)) :
       await this.chartsManageService.getChartById(this.paramsId);

       this.chart.options = this.addOptions()
      } catch (error) {
        this.apiResponseProvider.error('Não foi Possivel Encontrar o Gráfico', 'Erro ao Buscar o Gráfico');
      }
    }
    this.loading = false;
  }


  private addOptions(){
    return {
      width:(window.screen.width*0.60),
      heigth:(window.screen.height*0.60),
      dynamicResize:true,
    }
  }
}
