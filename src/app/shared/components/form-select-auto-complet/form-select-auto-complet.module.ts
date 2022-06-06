import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormSelectAutoCompletComponent } from './form-select-auto-complet.component';



@NgModule({
  declarations: [FormSelectAutoCompletComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FormSelectAutoCompletComponent]
})
export class FormSelectAutoCompletModule { }
