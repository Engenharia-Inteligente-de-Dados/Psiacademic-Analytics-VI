import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PsiBadgeComponent } from './psi-badge.component';



@NgModule({
  declarations: [
    PsiBadgeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PsiBadgeComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PsiBadgeModule { }
