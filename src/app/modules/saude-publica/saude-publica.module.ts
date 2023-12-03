import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPublicoModule } from './dashboard-publico/dashboard-publico.module';
import { SaudePublicaRoutingModule } from './saude-publica-routing.module';
import { GeoChartModule } from 'src/app/shared/components/geo-chart/geo-chart.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardPublicoModule,
    SaudePublicaRoutingModule,
    GeoChartModule,
  ],
})
export class SaudePublicaModule { }
