import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineAutoresPipe } from './inline-autores.pipe';

@NgModule({
  declarations: [
    InlineAutoresPipe
  ],
  imports: [ CommonModule ],
  exports: [InlineAutoresPipe],
  providers: [],
})
export class InlineAutoresModule {}
