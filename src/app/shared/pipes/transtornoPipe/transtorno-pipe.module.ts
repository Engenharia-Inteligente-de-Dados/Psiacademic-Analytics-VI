import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranstornoPipePipe } from './transtorno-pipe.pipe';



@NgModule({
  declarations: [
    TranstornoPipePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TranstornoPipePipe
  ]
})
export class TranstornoPipeModule { }
