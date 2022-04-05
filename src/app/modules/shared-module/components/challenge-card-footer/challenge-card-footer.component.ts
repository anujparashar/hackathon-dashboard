import { Component, Input, OnInit } from '@angular/core';
import { CHALLENGE_TYPE } from 'src/app/interfaces/challenge';
import { DashboardService } from 'src/app/modules/dashboard/services/dashboard.service';

@Component({
    selector: 'app-challenge-card-footer',
    templateUrl: './challenge-card-footer.component.html',
    styleUrls: ['./challenge-card-footer.component.scss']
})
export class ChallengeCardFooterComponent implements OnInit {
    // card is pass by reference so store will automatically get updated when card is liked or unlike
    @Input('card') card: CHALLENGE_TYPE;
    @Input('challengeConfig') challengeConfig ?: any;

    challenges: CHALLENGE_TYPE[];

    constructor(private dashboardService: DashboardService) { }

    ngOnInit(): void {
        this.dashboardService.getAllChallenges().subscribe((challanges: CHALLENGE_TYPE[]) => {
            this.challenges = challanges;
        });
    }

    onLike() {
        if(this.card.likes.liked) {
            this.card.likes.count -= 1;
            this.card.likes.liked = false
        } else {
            this.card.likes.count += 1;
            this.card.likes.liked = true;
        }

      }
}
