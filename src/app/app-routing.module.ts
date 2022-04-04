import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/authentication/guards/auth.guard';
import { PageNotFoundComponent } from './modules/shared-module/views/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'authentication',
        pathMatch: 'full',
    },
    {
        path: 'authentication',
        loadChildren: () =>
            import('./modules/authentication/authentication.module').then(
                (module) => module.Authentication
            ),
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: () =>
            import('./modules/dashboard/dashboard.module').then(
                (module) => module.DashboardModule
            ),
    },

    {
        path:'**',
        component: PageNotFoundComponent,
        data: {message:'404, Page not found!'}
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
