import { Component, Input, OnInit } from '@angular/core';
import { Row } from 'angular-google-charts';
import {
  IchartOptions,
} from 'src/app/shared/interfaces/chart.interfaces';
@Component({
  selector: 'psi-chart',
  templateUrl: './psi-chart.component.html',
  styleUrls: ['./psi-chart.component.scss'],
})
export class PsiChartComponent implements OnInit {
  @Input() chartData: any = [];
  @Input() chartType: any;
  @Input() columnNames: any;
  @Input() options?: IchartOptions['option'] = {};


  public option: any;

  constructor() {}

  ngOnInit(): void {
    console.log(`chartData - ${this.chartData}`)
    console.log(`columnNames - ${this.columnNames}`)
    console.log(`options - ${this.options}`)
    console.log(`chartType - ${this.chartType}`)
  }

  onReady(event: any) {
    console.log('onReady', event);
  }

  getOptions() {
    this.option = this.options && Object.keys(this.options).length == 0  ? {} : this.options;
  }
}
