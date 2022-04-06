import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { TEST_CHALLENGES } from 'src/app/mock-test-data/mock-test-challenge-data';
import { DashboardService } from 'src/app/modules/dashboard/services/dashboard.service';
import { SharedModuleModule } from 'src/app/modules/shared-module/shared-module.module';
import { ChallengeCardLayoutComponent } from 'src/app/modules/shared-module/views';
import { SortbyComponent } from '../../components';

import { ViewAllChallengesComponent } from './view-all-challenges.component';

describe('ViewAllChallengesComponent', () => {
    let component: ViewAllChallengesComponent;
    let fixture: ComponentFixture<ViewAllChallengesComponent>;
    let mockDashboardService = {
        getAllChallenges: jasmine.createSpy('getAllChallenges').and.callFake(() => {
            return of(TEST_CHALLENGES)
        })
    }
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ViewAllChallengesComponent, SortbyComponent],
            providers: [
                {provide: DashboardService, useValue:mockDashboardService}
            ],
            imports: [SharedModuleModule]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ViewAllChallengesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('getChallenges', () => {
        it('should set challenges when component is being called', () => {
            component.getChallenges();
            expect(component.challenges).toEqual(TEST_CHALLENGES);
        })
        it('should call getChallenges on component load ', () => {
            spyOn(component, 'getChallenges')
            component.ngOnInit();
            expect(component.getChallenges).toHaveBeenCalled();
        })
    });

    describe('ngOnDestroy', () => {
        it('should unsubscribe the subscriptions', () => {
            spyOn(component.subscription, 'unsubscribe');
            component.ngOnDestroy();
            expect(component.subscription.unsubscribe).toHaveBeenCalled();
        })
    })
});
