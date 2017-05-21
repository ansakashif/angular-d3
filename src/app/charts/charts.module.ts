import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { chartRoutes } from './charts.routes';
import { BarChartService } from './bar-chart.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(chartRoutes)
  ],
  declarations: [BarChartComponent],
  providers: [BarChartService]
})
export class ChartsModule { }
