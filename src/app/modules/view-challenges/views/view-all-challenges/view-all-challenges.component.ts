import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CHALLENGE_TYPE } from 'src/app/interfaces/challenge';
import { DashboardService } from 'src/app/modules/dashboard/services/dashboard.service';

@Component({
    selector: 'app-view-all-challenges',
    templateUrl: './view-all-challenges.component.html',
    styleUrls: ['./view-all-challenges.component.scss']
})
export class ViewAllChallengesComponent implements OnInit, OnDestroy {
    challenges: CHALLENGE_TYPE[];
    subscription: Subscription;

    constructor(private dashboardService: DashboardService) { }

    ngOnInit(): void {
        this.getChallenges();
    }

    getChallenges() {
        this.subscription = this.dashboardService.getAllChallenges().subscribe((challenges) => {
            this.challenges = challenges;            
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
