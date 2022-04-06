import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { GetFeatureService } from '../shell-serivces/get-feature.service';

import { ManageChallengeFeatureGuard } from './manage-challenge-feature.guard';

describe('ManageChallengeFeatureGuard', () => {
    let guard: ManageChallengeFeatureGuard;
    const getFeatureServiceMock = {
        getUserFeatureAccess: jasmine.createSpy('getUserFeatureAccess').and.returnValue(true)
    }
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: GetFeatureService, useValue: getFeatureServiceMock
                }
            ]
        });
        guard = TestBed.inject(ManageChallengeFeatureGuard);
    });

    it('should be created', () => {
        expect(guard).toBeTruthy();
    });

    describe('can activate', () => {
        it('shoud return true', () => {
            expect(guard.canActivate(
                {} as ActivatedRouteSnapshot,
                {} as RouterStateSnapshot
            )).toBeTruthy()
        })
    })
});
