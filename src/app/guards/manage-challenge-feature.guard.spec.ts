import { TestBed } from '@angular/core/testing';

import { ManageChallengeFeatureGuard } from './manage-challenge-feature.guard';

describe('ManageChallengeFeatureGuard', () => {
    let guard: ManageChallengeFeatureGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        guard = TestBed.inject(ManageChallengeFeatureGuard);
    });

    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
