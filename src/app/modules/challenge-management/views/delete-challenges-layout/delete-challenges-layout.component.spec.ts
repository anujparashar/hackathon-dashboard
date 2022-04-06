import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { TEST_CHALLENGES } from 'src/app/mock-test-data/mock-test-challenge-data';
import { DashboardService } from 'src/app/modules/dashboard/services/dashboard.service';
import { SharedModuleModule } from 'src/app/modules/shared-module/shared-module.module';
import { ChallengeCardLayoutComponent } from 'src/app/modules/shared-module/views';

import { DeleteChallengesLayoutComponent } from './delete-challenges-layout.component';

describe('DeleteChallengesLayoutComponent', () => {
    let component: DeleteChallengesLayoutComponent;
    let fixture: ComponentFixture<DeleteChallengesLayoutComponent>;
    let dashboardServiceMock = {
        getAllChallenges: jasmine.createSpy('getAllChallenges').and.callFake(() => {
            return of(JSON.parse(JSON.stringify(TEST_CHALLENGES)))
        }),
        updateChallenges: jasmine.createSpy('updateChallenges')
    }
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DeleteChallengesLayoutComponent, ChallengeCardLayoutComponent],
            providers: [{
                provide: DashboardService,
                useValue: dashboardServiceMock
            }],
            imports: [SharedModuleModule]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DeleteChallengesLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('getAllChallenges', () => {
        it('should get all challenges from dashboard service and set challenges', () => {
            component.getAllChallenges();
            expect(component.challenges).toEqual(TEST_CHALLENGES)
        })
    })

    describe('deleteChallengeEvent', () => {
        it('should delete selected challenge from store', () => {
            let challenge = JSON.parse(JSON.stringify(TEST_CHALLENGES))[0];
            component.deleteChallengeEvent(challenge);
            expect(dashboardServiceMock.updateChallenges).toHaveBeenCalledWith(TEST_CHALLENGES.slice(1))
        })
    })
});
