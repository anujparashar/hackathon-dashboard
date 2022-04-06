import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallengeManagementRoutingModule } from './challenge-management-routing.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { views } from './views';


@NgModule({
    declarations: [
        ...views
    ],
    imports: [
        CommonModule,
        ChallengeManagementRoutingModule,
        SharedModuleModule,
        ReactiveFormsModule,
        AngularMaterialModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChallengeManagementModule { }
