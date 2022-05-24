import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HeaderModule } from '../../shared/components/core/header/header.module';
import { MenuLateralModule } from '../../shared/components/core/menu-lateral/menu-lateral.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    PublicComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    HeaderModule,
    MenuLateralModule,
    IonicModule,
  ]
})
export class PublicModule { }
