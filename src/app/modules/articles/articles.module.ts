import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { SearchComponent } from './search/search.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineAutoresModule } from '../../shared/pipes/inlineAutores/inline-autores.module';
import { TutorialComponent } from './tutorial/tutorial.component';
import { SearchResultModule } from '../../shared/components/search-result/search-result.module';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    ArticlesComponent,
    SearchComponent,
    TutorialComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    SearchResultModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ArticlesModule { }
