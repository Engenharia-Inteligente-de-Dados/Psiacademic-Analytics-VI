import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLateralComponent } from './menu-lateral.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MenuLateralComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [MenuLateralComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MenuLateralModule { }
