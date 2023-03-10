import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarSaleDashboardRoutingModule } from './car-sale-dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    CarSaleDashboardRoutingModule
  ]
})
export class CarSaleDashboardModule { }
