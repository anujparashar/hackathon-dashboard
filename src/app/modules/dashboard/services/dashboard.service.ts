import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CHALLENGE_TYPE } from 'src/app/interfaces/challenge';
import { CHALLENGES } from 'src/app/mock-data/challenge-data';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    // setting initial list of challenges from constant file
    allChallenges = new BehaviorSubject<CHALLENGE_TYPE[]>(JSON.parse(JSON.stringify(CHALLENGES)));
    constructor() { }

    getAllChallenges(): BehaviorSubject<CHALLENGE_TYPE[]> {
        return this.allChallenges
    }

    updateChallenges(updatedRecord) {
        this.allChallenges.next(updatedRecord);
    }

    addChallenge(challenge: CHALLENGE_TYPE) {        
        this.allChallenges.getValue().push(challenge);
    }
}
