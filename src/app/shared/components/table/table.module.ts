import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { InlineAutoresModule } from '../../pipes/inlineAutores/inline-autores.module';
import { ResumePipeModule } from '../../pipes/resume-pipe/resume-pipe.module';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    InlineAutoresModule,
    ResumePipeModule
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
