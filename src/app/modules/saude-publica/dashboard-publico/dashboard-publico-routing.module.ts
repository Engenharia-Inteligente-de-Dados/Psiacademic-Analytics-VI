import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPublicoComponent } from './dashboard-publico.component';

const routes: Routes = [
  {
    path: '' ,
    component: DashboardPublicoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPublicoRoutingModule { }
