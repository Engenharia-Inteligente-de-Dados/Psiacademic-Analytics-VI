import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultsRoutingModule } from './consults-routing.module';
import { ConsultsComponent } from './consults.component';
import { ConsultsFormComponent } from './consults-form/consults-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { TableModule } from '../../shared/components/table/table.module';
import { PaginacaoModule } from '../../shared/components/paginacao/paginacao.module';
import { LoadingsModule } from 'src/app/shared/components/loadings/loadings.module';
import { TrabalhoInfoComponent } from './trabalho-info/trabalho-info.component';
import { InlineAutoresModule } from '../../shared/pipes/inlineAutores/inline-autores.module';

@NgModule({
  declarations: [
    ConsultsComponent,
    ConsultsFormComponent,
    TrabalhoInfoComponent,
  ],
  imports: [
    CommonModule,
    ConsultsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    TableModule,
    PaginacaoModule,
    LoadingsModule,
    InlineAutoresModule,
  ],
})
export class ConsultsModule {}
