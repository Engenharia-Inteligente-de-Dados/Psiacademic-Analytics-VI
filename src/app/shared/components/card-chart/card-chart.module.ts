import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardChartComponent } from './card-chart.component';


@NgModule({
  declarations: [
    CardChartComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardChartComponent
  ]
})
export class CardChartModule { }
