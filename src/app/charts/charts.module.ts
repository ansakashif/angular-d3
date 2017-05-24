import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { chartRoutes } from './charts.routes';
import { BarChartService } from './bar-chart.service';
import { LineChartService } from './line-chart.service';
import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(chartRoutes)
  ],
  declarations: [BarChartComponent, LineChartComponent],
  providers: [BarChartService, LineChartService]
})
export class ChartsModule { }
