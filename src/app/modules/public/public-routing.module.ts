import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full',
  },
  {
    path:'',
    component:PublicComponent,
    children:[
      {
        path: 'search',
        loadChildren: () =>
         import('../articles/articles.module').then((r) => r.ArticlesModule),
      },
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
        redirectTo: 'search',
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
