import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TEST_CHALLENGES } from 'src/app/mock-test-data/mock-test-challenge-data';
import { ReadMorePipe } from '../../pipes/read-more.pipe';

import { ChallengeDescriptionComponent } from './challenge-description.component';

describe('ChallengeDescriptionComponent', () => {
    let component: ChallengeDescriptionComponent;
    let fixture: ComponentFixture<ChallengeDescriptionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ChallengeDescriptionComponent, ReadMorePipe],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ChallengeDescriptionComponent);
        component = fixture.componentInstance;
        component.description = TEST_CHALLENGES[0].description
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('showAll', () => {
        it('should set showAllFlag to true and max length to the descriptions length', () => {
            component.showAll();
            expect(component.showAllFlag).toBeTruthy();
            expect(component.maxLength).toEqual(TEST_CHALLENGES[0].description.length);
        })
    })

    describe('showLess', () => {
        it('should set showAllFlag to true and max length to the descriptions length', () => {
            component.showLess();
            expect(component.showAllFlag).toBeFalsy();
            expect(component.maxLength).toEqual(40);
        })
    })
});
