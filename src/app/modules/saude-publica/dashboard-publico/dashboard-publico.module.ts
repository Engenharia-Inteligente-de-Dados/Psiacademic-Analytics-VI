import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { ChartModule } from '../../../shared/components/chart/chart.module';
import { FormSelectAutoCompletModule } from 'src/app/shared/components/form-select-auto-complet/form-select-auto-complet.module';
import { LoadingsModule } from '../../../shared/components/loadings/loadings.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { DashboardPublicoComponent } from './dashboard-publico.component';
import { DashboardPublicoRoutingModule } from './dashboard-publico-routing.module';


@NgModule({
  declarations: [
    DashboardPublicoComponent,
  ],
  imports: [
    CardModule,
    ChartModule,
    TableModule,
    DashboardPublicoRoutingModule,
    LoadingsModule,
    CommonModule,
    FormSelectAutoCompletModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardPublicoModule { }
