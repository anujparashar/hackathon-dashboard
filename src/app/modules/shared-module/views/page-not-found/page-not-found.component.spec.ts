import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', () => {
    let component: PageNotFoundComponent;
    let fixture: ComponentFixture<PageNotFoundComponent>;
    let ActivatedRouteMock = {
        data: {
            subscribe: jasmine.createSpy('subscribe').and.callFake(() =>  of('')),
            pipe: () => {}
        }
    };
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PageNotFoundComponent],
            providers: [
                {
                    provide: ActivatedRoute, useValue: ActivatedRouteMock
                }
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PageNotFoundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('on component initialization', () => {
        it('shhould call activated route', () => {
            component.ngOnInit();
            expect(ActivatedRouteMock.data.subscribe).toHaveBeenCalled();
        })
    })
});
