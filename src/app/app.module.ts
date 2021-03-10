import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ChartComponent } from './components/chart/chart.component';
import { TableComponent } from './components/table/table.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { AgGridModule } from 'ag-grid-angular';
import { TableChartContainerComponent } from './components/table-chart-container/table-chart-container.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ChartComponent,
    TableComponent,
    TableChartContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
