import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: 'graph',
    loadComponent: () => import('./app-components/chart/chart.component').then(m => m.ChartComponent)
  },
  {
    path: 'table',
    loadComponent: () => import('./app-components/table/table.component').then(m => m.TableComponent)
  },
  {
    path: '',
    loadComponent: () => import('./app-components/chart/chart.component').then(m => m.ChartComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
