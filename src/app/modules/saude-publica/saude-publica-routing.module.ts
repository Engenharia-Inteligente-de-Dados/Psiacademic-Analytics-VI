import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path:'dashboard',
    loadChildren: () =>
      import('./dashboard-publico/dashboard-publico.module').then((r) => r.DashboardPublicoModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaudePublicaRoutingModule { }
