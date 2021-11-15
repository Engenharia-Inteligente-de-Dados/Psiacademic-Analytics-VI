import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChartsManageService } from '../../../shared/services/charts-manage.service';
import { Ichart } from '../../../shared/interfaces/chart.interfaces';

@Component({
  selector: 'app-unique-chart',
  templateUrl: './unique-chart.component.html',
  styleUrls: ['./unique-chart.component.scss']
})
export class UniqueChartComponent implements OnInit {
  private routeSub!: Subscription;
  public chart: Ichart | undefined;;
  public actions = false;
  public loading = false;
  constructor(
    private route: ActivatedRoute,
    private chartsManageService: ChartsManageService
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      if (params.id) {
        this.chart = this.chartsManageService.getchartByIndex(params.id);
        this.loading = true;
      }
      else {
        this.chart = this.chartsManageService.getChartById(params.id);
        this.chart ? this.loading = true : this.loading = false;
      }
      this.actions = false
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

}
