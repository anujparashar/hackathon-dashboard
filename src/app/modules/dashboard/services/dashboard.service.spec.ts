import { TestBed } from '@angular/core/testing';
import { BehaviorSubject, of } from 'rxjs';
import { CHALLENGE_TYPE } from 'src/app/interfaces/challenge';
import { CHALLENGES_SORTBY_LIKES, TEST_CHALLENGES } from 'src/app/mock-test-data/mock-test-challenge-data';

import { DashboardService } from './dashboard.service';

describe('DashboardService', () => {
    let service: DashboardService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(DashboardService);
        service.allChallenges = new BehaviorSubject<CHALLENGE_TYPE[]>(JSON.parse(JSON.stringify(TEST_CHALLENGES)));
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('getAllChallenges', () => {
        it('should return allChallenges', () => {
            expect(service.getAllChallenges()).toBe(service.allChallenges)
        })
    })

    describe('updateChallenges', () => {
        it('should update allChallenges with records passed as argumnet', () => {
            service.updateChallenges(CHALLENGES_SORTBY_LIKES);
            service.allChallenges.subscribe(val => expect(val).toEqual(CHALLENGES_SORTBY_LIKES));
        })
    })

    describe('addChallenge', () => {
        it('should add challenges to the existing challenge records', () => {
            service.addChallenge({
                id: 12,
                title: 'Print a Binary Tree in Vertical Order | Set 2 (Map based Method)',
                description: 'Given a Non-Negative integer N, denoting the first 2N positive integers where consecutive integers starting from 1 are paired with each other, the task is to find the last number remaining after performing the following operations',
                tags: ['Hash', 'Linked list'],
                creationDate: 'Fri Apr 01 2021 00:00:00 GMT+0530 (India Standard Time)',
                likes: {
                    count: 2,
                    liked: false
                }
            });
            expect(service.allChallenges.getValue()).toEqual([...TEST_CHALLENGES, {
                id: 12,
                title: 'Print a Binary Tree in Vertical Order | Set 2 (Map based Method)',
                description: 'Given a Non-Negative integer N, denoting the first 2N positive integers where consecutive integers starting from 1 are paired with each other, the task is to find the last number remaining after performing the following operations',
                tags: ['Hash', 'Linked list'],
                creationDate: 'Fri Apr 01 2021 00:00:00 GMT+0530 (India Standard Time)',
                likes: {
                    count: 2,
                    liked: false
                }
            }])
        })
    })
});
