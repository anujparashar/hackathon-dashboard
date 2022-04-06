import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { TEST_CHALLENGE_CONFIG } from 'src/app/mock-test-data/challenge-action-test-config';
import { TEST_CHALLENGES } from 'src/app/mock-test-data/mock-test-challenge-data';
import { DashboardService } from 'src/app/modules/dashboard/services/dashboard.service';

import { ChallengeCardFooterComponent } from './challenge-card-footer.component';

describe('ChallengeCardFooterComponent', () => {
    let component: ChallengeCardFooterComponent;
    let fixture: ComponentFixture<ChallengeCardFooterComponent>;
    let challengeCard = JSON.parse(JSON.stringify(TEST_CHALLENGES[0]));
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            declarations: [ChallengeCardFooterComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ChallengeCardFooterComponent);
        component = fixture.componentInstance;
        component.challengeConfig = JSON.parse(JSON.stringify(TEST_CHALLENGE_CONFIG));;
        component.card = JSON.parse(JSON.stringify(TEST_CHALLENGES[0]));;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('onLike', () => {
        beforeEach(() => {
            challengeCard = JSON.parse(JSON.stringify(TEST_CHALLENGES[0]));
        })
        it('should increment like count if the card is not liked already', () => {
            component.card.likes.liked = false;
            component.onLike();
            expect(component.card.likes.count).toEqual(challengeCard.likes.count + 1);
            expect(component.card.likes.liked).toEqual(true);
        })
        it('should decrement like count if the card is liked already', () => {
            component.card.likes.liked = true;
            component.onLike();
            expect(component.card.likes.count).toEqual(challengeCard.likes.count - 1);
            expect(component.card.likes.liked).toEqual(false);
        })
    })
});
