import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { DashboardLoadingComponent } from './dashboard/dash-loading.component';
import { ConsultLoadingComponent } from './consult-loading/consult-loading.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    DashboardLoadingComponent,
    ConsultLoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    DashboardLoadingComponent,
    ConsultLoadingComponent
  ]
})
export class LoadingsModule { }
