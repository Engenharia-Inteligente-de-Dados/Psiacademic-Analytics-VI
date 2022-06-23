import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { DashboardLoadingComponent } from './dashboard/dash-loading.component';
import { ConsultLoadingComponent } from './consult-loading/consult-loading.component';
import { ChartLoadingComponent } from './chart-loading/chart-loading.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    DashboardLoadingComponent,
    ConsultLoadingComponent,
    ChartLoadingComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    DashboardLoadingComponent,
    ConsultLoadingComponent,
    ChartLoadingComponent
  ]
})
export class LoadingsModule { }
