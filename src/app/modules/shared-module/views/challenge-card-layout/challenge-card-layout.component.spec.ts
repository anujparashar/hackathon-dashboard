import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { TEST_CHALLENGES } from 'src/app/mock-test-data/mock-test-challenge-data';
import { ChallengeCardFooterComponent, ChallengeDescriptionComponent } from '../../components';

import { ChallengeCardLayoutComponent } from './challenge-card-layout.component';

describe('ChallengeCardLayoutComponent', () => {
    let component: ChallengeCardLayoutComponent;
    let fixture: ComponentFixture<ChallengeCardLayoutComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            schemas:[CUSTOM_ELEMENTS_SCHEMA],
            declarations: [ChallengeCardLayoutComponent, ChallengeCardFooterComponent, ChallengeDescriptionComponent],
            imports: [AngularMaterialModule]
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
