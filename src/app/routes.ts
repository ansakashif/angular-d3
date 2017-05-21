import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const appRoutes:Routes = [
    // {path: 'home', component: HomeComponent },
    // {path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'charts', loadChildren: 'app/charts/charts.module#ChartsModule'}
]

// export const appRoutes: Routes = [
//   {
//     path: '',
//     redirectTo: 'charts',
//     pathMatch: 'full',
//   },
//   {
//     path: 'home',
//     component: HomeComponent,
//     data: {
//       title: 'Home'
//     },
//     children: [
//       {
//         path: 'charts',
//         loadChildren: 'app/charts/charts.module#ChartsModule'
//       }
//     ]
//   }
// ];