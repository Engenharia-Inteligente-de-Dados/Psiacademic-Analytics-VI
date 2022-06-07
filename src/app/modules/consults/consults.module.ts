import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultsRoutingModule } from './consults-routing.module';
import { ConsultsComponent } from './consults.component';
import { ConsultsFormComponent } from './consults-form/consults-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'src/app/shared/components/card/card.module';


@NgModule({
  declarations: [
    ConsultsComponent,
    ConsultsFormComponent
  ],
  imports: [
    CommonModule,
    ConsultsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,

  ]
})
export class ConsultsModule { }
