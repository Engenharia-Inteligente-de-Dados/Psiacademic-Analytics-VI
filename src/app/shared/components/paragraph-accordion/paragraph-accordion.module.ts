import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParagraphAccordionComponent } from './paragraph-accordion.component';
import { ResumePipeModule } from '../../pipes/resume-pipe/resume-pipe.module';



@NgModule({
  declarations: [
    ParagraphAccordionComponent
  ],
  imports: [
    CommonModule,
    ResumePipeModule
  ],
  exports:[
    ParagraphAccordionComponent
  ]
})
export class ParagraphAccordionModule { }
