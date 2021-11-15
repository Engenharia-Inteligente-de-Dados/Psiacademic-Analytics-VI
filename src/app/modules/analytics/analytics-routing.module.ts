import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics.component';
import { UniqueChartComponent } from './unique-chart/unique-chart.component';

const routes: Routes = [
  {
    path:'',
    component:AnalyticsComponent
  },
  {
    path:':id',
    component:UniqueChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalyticsRoutingModule { }
