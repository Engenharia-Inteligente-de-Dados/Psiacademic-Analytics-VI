import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { AnalyticsComponent } from './analytics.component';
import { CardChartModule } from 'src/app/shared/components/card-chart/card-chart.module';
import { UniqueChartComponent } from './unique-chart/unique-chart.component';
import { ConfigModule } from '../../shared/components/config/config.module';


@NgModule({
  declarations: [
    AnalyticsComponent,
    UniqueChartComponent
  ],
  imports: [
    CommonModule,
    AnalyticsRoutingModule,
    CardChartModule,
    ConfigModule
  ]
})
export class AnalyticsModule { }
