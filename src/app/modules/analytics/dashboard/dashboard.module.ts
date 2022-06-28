import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { ChartModule } from '../../../shared/components/chart/chart.module';
import { FormSelectAutoCompletModule } from 'src/app/shared/components/form-select-auto-complet/form-select-auto-complet.module';
import { LoadingsModule } from '../../../shared/components/loadings/loadings.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { FrequenciaTodosItensComponent } from './frequencia-todos-itens/frequencia-todos-itens.component';


@NgModule({
  declarations: [
    DashboardComponent,
    FrequenciaTodosItensComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CardModule,
    ChartModule,
    FormSelectAutoCompletModule,
    LoadingsModule,
    TableModule
  ]
})
export class DashboardModule { }
