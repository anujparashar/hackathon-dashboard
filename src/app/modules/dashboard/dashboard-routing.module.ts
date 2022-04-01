import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallengesLayoutComponent } from './view/challenges-layout/challenges-layout.component';
import { DashboardBodyLayoutComponent } from './view/dashboard-body-layout/dashboard-body-layout.component';
import { DashboardLayoutComponent } from './view/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardLayoutComponent,
        children: [
            {
                path: 'challenges',
                component: ChallengesLayoutComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
