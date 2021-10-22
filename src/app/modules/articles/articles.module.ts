import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { PsiBadgeModule } from '../../shared/components/psi-badge/psi-badge.module';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ParagraphAccordionModule } from '../../shared/components/paragraph-accordion/paragraph-accordion.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ArticlesComponent,
    SearchComponent,
    SearchResultComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    PsiBadgeModule,
    ParagraphAccordionModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ArticlesModule { }
