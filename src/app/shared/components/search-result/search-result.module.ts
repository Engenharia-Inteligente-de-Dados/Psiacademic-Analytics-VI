import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ParagraphAccordionModule } from '../paragraph-accordion/paragraph-accordion.module';
import { PsiBadgeModule } from '../psi-badge/psi-badge.module';
import { SwiperModule } from 'swiper/angular';
import { InlineAutoresModule } from '../../pipes/inlineAutores/inline-autores.module';
import { SearchResultCardComponent } from './result-card/search-result-card.component';
import { SearchResultComponent } from './search-result.component';
import { ResultTableComponent } from './result-table/result-table.component';
import { PaginacaoModule } from '../paginacao/paginacao.module';



@NgModule({
  declarations: [
    SearchResultCardComponent,
    SearchResultComponent,
    ResultTableComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    PsiBadgeModule,
    ParagraphAccordionModule,
    SwiperModule,
    InlineAutoresModule,
    PaginacaoModule
  ],
  exports: [SearchResultComponent]
})
export class SearchResultModule { }
