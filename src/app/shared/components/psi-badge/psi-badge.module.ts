import { NgModule } from '@angular/core';
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
  ]
})
export class PsiBadgeModule { }
