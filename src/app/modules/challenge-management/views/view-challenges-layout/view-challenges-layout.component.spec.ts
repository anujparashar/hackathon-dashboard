import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularMaterialModule } from 'src/app/angular-material.module';

import { ViewChallengesLayoutComponent } from './view-challenges-layout.component';

describe('ViewChallengesLayoutComponent', () => {
    let component: ViewChallengesLayoutComponent;
    let fixture: ComponentFixture<ViewChallengesLayoutComponent>;
    const router = {
        navigate: jasmine.createSpy('navigate'),
        snapshot: {}
    };
    const fakeActivatedRoute = {
        data: jasmine.createSpy('subscribe'),
        snapshot: {}
    };
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ViewChallengesLayoutComponent],
            imports: [ReactiveFormsModule, AngularMaterialModule],
            providers: [
                {
                    provide: Router,
                    useValue: router
                },
                {
                    provide: ActivatedRoute,
                    useValue: fakeActivatedRoute
                }
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ViewChallengesLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
