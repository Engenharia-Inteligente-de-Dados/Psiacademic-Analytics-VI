import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { SubMenuModule } from '../sub-menu/sub-menu.module';



@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SubMenuModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }
