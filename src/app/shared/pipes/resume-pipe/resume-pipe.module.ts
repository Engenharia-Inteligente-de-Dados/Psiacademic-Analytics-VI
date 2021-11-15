import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumePipePipe } from './resume-pipe.pipe';



@NgModule({
  declarations: [
    ResumePipePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ResumePipePipe
  ]
})
export class ResumePipeModule { }
