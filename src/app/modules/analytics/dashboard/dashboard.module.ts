import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { ChartModule } from '../../../shared/components/chart/chart.module';
import { FormSelectAutoCompletModule } from 'src/app/shared/components/form-select-auto-complet/form-select-auto-complet.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CardModule,
    ChartModule,
    FormSelectAutoCompletModule
  ]
})
export class DashboardModule { }
