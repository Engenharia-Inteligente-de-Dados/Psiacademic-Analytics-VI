import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { PsiBadgeModule } from '../../shared/components/psi-badge/psi-badge.module';


@NgModule({
  declarations: [
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    PsiBadgeModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ArticlesModule { }
