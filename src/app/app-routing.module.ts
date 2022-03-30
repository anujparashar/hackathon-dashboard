import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/authentication/guards/auth.guard';

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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
