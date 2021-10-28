import { Component, Input, OnInit } from '@angular/core';
import { Ichart, IChartColumns, IChartData, IchartOptions, IChartType } from '../../interfaces/chart.interfaces';

@Component({
  selector: 'psi-card-chart',
  templateUrl: './card-chart.component.html',
  styleUrls: ['./card-chart.component.scss']
})
export class CardChartComponent implements OnInit {

  @Input() actions?: boolean = true;
  @Input() chartData?: IChartData;
  @Input() chartType?: IChartType;
  @Input() columnNames?: IChartColumns;
  @Input() options?: IchartOptions;


  constructor() { }

  ngOnInit(): void {
  }

}
