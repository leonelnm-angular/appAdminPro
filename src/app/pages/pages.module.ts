import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Pages
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.routes';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
  ]
})
export class PagesModule { }
