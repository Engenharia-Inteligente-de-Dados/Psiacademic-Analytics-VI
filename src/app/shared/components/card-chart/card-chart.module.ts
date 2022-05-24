import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardChartComponent } from './card-chart.component';
import { PsiChartComponent } from './psi-chart/psi-chart.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CardChartComponent,
    PsiChartComponent
  ],
  imports: [
    CommonModule,
    GoogleChartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CardChartComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class CardChartModule { }
