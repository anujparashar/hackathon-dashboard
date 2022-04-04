import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { ViewChallengeRoutingModule } from './view-challenges-routing.module';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { views } from './views';
import { components } from './components';



@NgModule({
    declarations: [
        ...views,
        ...components
    ],
    imports: [
        CommonModule,
        ViewChallengeRoutingModule,
        SharedModuleModule,
        AngularMaterialModule
    ]
})
export class ViewChallengesModule { }
