import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllChallengesComponent } from './views/view-all-challenges/view-all-challenges.component';

const routes: Routes = [
    {
        path: '',
        component: ViewAllChallengesComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ViewChallengeRoutingModule { }
