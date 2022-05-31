import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'analytics',
    pathMatch: 'full',
  },
  {
    path:'',
    component:PublicComponent,
    children:[
      {
        path: 'consultas/:tipo',
        loadChildren: () =>
         import('../consults/consults.module').then((r) => r.ConsultsModule),
      },
      {
        path: 'analytics',
        loadChildren: () =>
         import('../analytics/analytics.module').then((r) => r.AnalyticsModule),
      },
      {
        path: '**',
        redirectTo: 'analytics',
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
