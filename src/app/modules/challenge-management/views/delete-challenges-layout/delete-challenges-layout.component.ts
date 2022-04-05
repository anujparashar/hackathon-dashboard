import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CHALLENGE_CONFIG } from 'src/app/constants/challenge-action-config';
import { CHALLENGE_TYPE } from 'src/app/interfaces/challenge';
import { DashboardService } from 'src/app/modules/dashboard/services/dashboard.service';

@Component({
    selector: 'app-delete-challenges-layout',
    templateUrl: './delete-challenges-layout.component.html',
    styleUrls: ['./delete-challenges-layout.component.scss']
})
export class DeleteChallengesLayoutComponent implements OnInit {
    challenges: CHALLENGE_TYPE[];
    challengeConfig: { delete: boolean; likeButton: boolean };
    unsubscribe: Subject<void> = new Subject()

    constructor(private dashboardService: DashboardService) { }

    ngOnInit(): void {
        this.getAllChallenges();
        this.challengeConfig = CHALLENGE_CONFIG;
        // like unlike functionality disable in delete mode
        this.challengeConfig.likeButton = false;
    }

    getAllChallenges() {
        this.dashboardService.getAllChallenges().pipe(takeUntil(this.unsubscribe)).subscribe((challenge: CHALLENGE_TYPE[]) => {
            console.log(challenge)
            this.challenges = challenge;
        })
    }

    deleteChallengeEvent(event) {
        this.dashboardService.updateChallenges(this.challenges.filter((item) => item.id !== event.id))
    }

    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete()
    }
}
