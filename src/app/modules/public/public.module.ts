import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HeaderComponent } from '../../shared/component/core/header/header.component';
import { HeaderModule } from '../../shared/component/core/header/header.module';


@NgModule({
  declarations: [
    PublicComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    HeaderModule
  ]
})
export class PublicModule { }
