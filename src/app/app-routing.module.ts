import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'saude-publica',
    pathMatch: 'full',
  },
  {
    path: 'public',
    loadChildren: () =>
      import('./modules/public/public.module').then((r) => r.PublicModule),
  },
  {
    path: '**',
    redirectTo: 'public',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
