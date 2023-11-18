import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPublicoModule } from './dashboard-publico/dashboard-publico.module';
import { SaudePublicaRoutingModule } from './saude-publica-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardPublicoModule,
    SaudePublicaRoutingModule,
  ],
})
export class SaudePublicaModule { }
