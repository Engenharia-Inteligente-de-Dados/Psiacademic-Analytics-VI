import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsModule, LegendService, DataLabelService, MapsTooltipService } from '@syncfusion/ej2-angular-maps';
import { GeoChartComponent } from './geo-chart.component';
import { AppComponent } from '../../../app.component';


@NgModule({
  declarations: [
    GeoChartComponent
  ],
  imports: [
    CommonModule,
    MapsModule
  ],
  exports: [
    GeoChartComponent,
  ],
  providers: [LegendService, DataLabelService, MapsTooltipService],
  bootstrap: [AppComponent]
})
export class GeoChartModule { }