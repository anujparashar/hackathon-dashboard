import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TEST_CHALLENGES } from 'src/app/mock-test-data/mock-test-challenge-data';

import { ChallengeCardLayoutComponent } from './challenge-card-layout.component';

describe('ChallengeCardLayoutComponent', () => {
    let component: ChallengeCardLayoutComponent;
    let fixture: ComponentFixture<ChallengeCardLayoutComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ChallengeCardLayoutComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ChallengeCardLayoutComponent);
        component = fixture.componentInstance;
        component.card = TEST_CHALLENGES[0];
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('deleteChallenge', () => {
        it('should emit deleteChallengeEvent when deleteChallenge  is called', () => {
            spyOn(component.deleteChallengeEvent, 'emit');
            component.deleteChallenge(TEST_CHALLENGES[0]);
            expect(component.deleteChallengeEvent.emit).toHaveBeenCalledWith(TEST_CHALLENGES[0]);
        })
    })
});
