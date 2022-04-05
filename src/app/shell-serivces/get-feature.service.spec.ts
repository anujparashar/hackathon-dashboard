import { TestBed } from '@angular/core/testing';

import { GetFeatureService } from './get-feature.service';

describe('GetFeatureService', () => {
    let service: GetFeatureService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(GetFeatureService);
        service.loggedInUserFeatures = ['view-challenges','manage-challenges'];
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    
    describe('setLoggedInUserFeatures', () => {
        it('should set loggedInUserFeatures to the value passed in setLoggedInUserFeatures', () => {
            service.loggedInUserFeatures = [];
            service.setLoggedInUserFeatures(['view-challenges','manage-challenges']);
            expect(service.loggedInUserFeatures).toEqual(['view-challenges','manage-challenges']);
        })
    })

    describe('getLoggedInUserFeatures', () => {
        it('should return loggedInUserFeatures from getLoggedInUserFeatures', () => {
            expect(service.getLoggedInUserFeatures()).toEqual(['view-challenges','manage-challenges']);
        })
    })

    describe('getUserFeatureAccess', () => {
        it('should return false if feature not present in loggedInUserFeatures', () => {
            expect(service.getUserFeatureAccess('add-challenge')).toBeFalse();
        });
        it('should return true if feature not present in loggedInUserFeatures', () => {
            expect(service.getUserFeatureAccess('view-challenges')).toBeTruthy();
        })
    })
});
