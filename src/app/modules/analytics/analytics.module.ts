import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { AnalyticsComponent } from './analytics.component';
import { CardChartModule } from 'src/app/shared/components/card-chart/card-chart.module';
import { UniqueChartComponent } from './unique-chart/unique-chart.component';


@NgModule({
  declarations: [
    AnalyticsComponent,
    UniqueChartComponent
  ],
  imports: [
    CommonModule,
    AnalyticsRoutingModule,
    CardChartModule
  ]
})
export class AnalyticsModule { }
