import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './view/dashboard-layout/dashboard-layout.component';
import { DashboardHeaderLayoutComponent } from './view/dashboard-header-layout/dashboard-header-layout.component';
import { DashboardBodyLayoutComponent } from './view/dashboard-body-layout/dashboard-body-layout.component';
import { ChallengesLayoutComponent } from './view/challenges-layout/challenges-layout.component';


@NgModule({
  declarations: [
    DashboardLayoutComponent,
    DashboardHeaderLayoutComponent,
    DashboardBodyLayoutComponent,
    ChallengesLayoutComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
