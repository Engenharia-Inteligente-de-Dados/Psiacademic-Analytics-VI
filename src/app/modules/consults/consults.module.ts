import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultsRoutingModule } from './consults-routing.module';
import { ConsultsComponent } from './consults.component';
import { SubMenuModule } from '../../shared/components/core/sub-menu/sub-menu.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsultFormComponent } from './consult-form/consult-form.component';
import { SearchResultModule } from '../../shared/components/search-result/search-result.module';


@NgModule({
  declarations: [
    ConsultsComponent,
    ConsultFormComponent,
  ],
  imports: [
    CommonModule,
    ConsultsRoutingModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    SearchResultModule
  ]
})
export class ConsultsModule { }
