import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeoChartComponent } from 'src/app/geo-chart/geo-chart.component';

@NgModule({
  declarations: [
    GeoChartComponent,    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GeoChartComponent
  ]
})
export class GeoChartModule { }