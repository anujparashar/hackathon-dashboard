import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';

import { LoginLayoutComponent } from './login-layout.component';

describe('LoginLayoutComponent', () => {
    let component: LoginLayoutComponent;
    let fixture: ComponentFixture<LoginLayoutComponent>;
    const fakeActivatedRoute = {
        data: jasmine.createSpy('subscribe'),
        snapshot: { }
    };
    const route = {
        navigate: jasmine.createSpy('navigate'),
        snapshot: { }
    };
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LoginLayoutComponent, LoginLayoutComponent],
            schemas:[CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                {
                    provide:Router,
                    useValue: route
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
        fixture = TestBed.createComponent(LoginLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
