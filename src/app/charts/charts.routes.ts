import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component'

export const chartRoutes = [
    {path: 'bar-chart', component: BarChartComponent},
    {path: 'line-chart', component: LineChartComponent} 
]

// import { NgModule } from '@angular/core';
// import { Routes,
//      RouterModule } from '@angular/router';

// import { BarChartComponent } from './bar-chart/bar-chart.component'

// const routes: Routes = [
//   {
//     path: '',
//     component: BarChartComponent,
//     data: {
//       title: 'Bar Chart'
//     }
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class ChartRoutingModule {}