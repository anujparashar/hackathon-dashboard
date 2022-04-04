import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageChallengeFeatureGuard } from 'src/app/guards/manage-challenge-feature.guard';
import { AuthGuard } from '../authentication/guards/auth.guard';
import { ViewChallengesLayoutComponent } from '../challenge-management/views/view-challenges-layout/view-challenges-layout.component';
import { PageNotFoundComponent } from '../shared-module/views/page-not-found/page-not-found.component';
import { DashboardLayoutComponent } from './view/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardLayoutComponent,
        children: [
            {
                path: 'view-challenges',
                loadChildren: () => import('../view-challenges/view-challenges.module').then(
                    (module) => module.ViewChallengesModule
                )
            },
            {
                path: 'manage-challenges',
                canActivate: [AuthGuard],
                loadChildren: () =>
                    import('../challenge-management/challenge-management.module').then(
                        (module) => module.ChallengeManagementModule
                    ),
            },
        ]
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        data: { key: 'notfound', message: '404, page not found!' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
