import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../shared-module/views';
import { AddChallengeLayoutComponent } from './views/add-challenge-layout/add-challenge-layout.component';
import { ChallengeManagementLayoutComponent } from './views/challenge-management-layout/challenge-management-layout.component';
import { DeleteChallengesLayoutComponent } from './views/delete-challenges-layout/delete-challenges-layout.component';
import { ViewChallengesLayoutComponent } from './views/view-challenges-layout/view-challenges-layout.component';

const routes: Routes = [
    {
        path: '',
        component: ViewChallengesLayoutComponent,
        children: [
            {
                path: '',
                component: PageNotFoundComponent,
                data: {
                    key: 'default page', message: 'Please select an action you want to perform!'
                }
            },
       
            {
                path: 'add-challenge',
                component: AddChallengeLayoutComponent
            },
            {
                path: 'delete-challenge',
                component: DeleteChallengesLayoutComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChallengeManagementRoutingModule { }
