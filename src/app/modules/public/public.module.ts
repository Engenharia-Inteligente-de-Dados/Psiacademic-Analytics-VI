import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { SidebarModule } from '../../shared/components/core/sidebar/sidebar.module';
import { HeaderModule } from '../../shared/components/core/header/header.module';


@NgModule({
  declarations: [
    PublicComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SidebarModule,
    HeaderModule,
  ]
})
export class PublicModule { }
