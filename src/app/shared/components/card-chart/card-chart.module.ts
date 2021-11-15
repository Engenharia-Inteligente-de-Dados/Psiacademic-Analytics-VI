import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardChartComponent } from './card-chart.component';
import { PsiChartComponent } from './psi-chart/psi-chart.component';
import { GoogleChartsModule } from 'angular-google-charts';


@NgModule({
  declarations: [
    CardChartComponent,
    PsiChartComponent
  ],
  imports: [
    CommonModule,
    GoogleChartsModule
  ],
  exports:[
    CardChartComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class CardChartModule { }
