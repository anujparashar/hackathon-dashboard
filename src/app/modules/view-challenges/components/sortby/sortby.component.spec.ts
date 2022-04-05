import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CHALLENES_SORTBY_DATE, CHALLENGES_SORTBY_LIKES, TEST_CHALLENGES } from 'src/app/mock-test-data/mock-test-challenge-data';

import { SortbyComponent } from './sortby.component';

describe('SortbyComponent', () => {
    let component: SortbyComponent;
    let fixture: ComponentFixture<SortbyComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SortbyComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SortbyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        component.cards = TEST_CHALLENGES;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('sortByLikes', () => {
        it('should sort challenges based on number of likes', () =>{
            component.sortByLikes();
            expect(component.cards).toEqual(CHALLENGES_SORTBY_LIKES)
        })
    })

    describe('sortByCreationDate', () => {
        it('should sort challenges based on date of creation', () =>{
            component.sortByCreationDate();
            expect(component.cards).toEqual(CHALLENES_SORTBY_DATE)
        })
    })
});
