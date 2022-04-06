import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { views } from './view';


@NgModule({
    declarations: [
        ...views
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        SharedModuleModule,
        AngularMaterialModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
