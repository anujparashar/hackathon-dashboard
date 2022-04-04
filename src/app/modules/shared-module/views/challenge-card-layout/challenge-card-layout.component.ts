import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CHALLENGE_TYPE } from 'src/app/interfaces/challenge';

@Component({
    selector: 'app-challenge-card-layout',
    templateUrl: './challenge-card-layout.component.html',
    styleUrls: ['./challenge-card-layout.component.scss']
})
export class ChallengeCardLayoutComponent implements OnInit {
    @Input('card') card: any;
    @Input('challengeConfig') challengeConfig ? = {delete: false,likeButton: true };
    @Output('deleteChallenge') deleteChallengeEvent ? = new EventEmitter<CHALLENGE_TYPE>();
    constructor() { }

    ngOnInit(): void {
    }

    deleteChallenge(card: CHALLENGE_TYPE) {
        this.deleteChallengeEvent.emit(card);
    }

}
