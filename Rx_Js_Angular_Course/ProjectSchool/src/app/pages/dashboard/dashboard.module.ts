import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardMaterialModule } from '@app/shared/material/dashboard-mat.module';
import { SharedModule } from '@app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './main/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    DashboardMaterialModule
  ]
})
export class DashboardModule { }
