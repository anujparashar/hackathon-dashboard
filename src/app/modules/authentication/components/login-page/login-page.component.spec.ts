import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { USER_DATA } from 'src/app/mock-data/user-data';
import { GetFeatureService } from 'src/app/shell-serivces/get-feature.service';

import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
    let component: LoginPageComponent;
    let fixture: ComponentFixture<LoginPageComponent>;
    const route = {
        navigate: jasmine.createSpy('navigate'),
        snapshot: { }
    };
    const getFeatureService = {
        setLoggedInUserFeatures: ''
    }
    const validFormdata = {
        userid: 'admin1',
        password: ''

    }
    const inValidFormdata = {
        userid: 'admin2',
        password: ''

    }
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LoginPageComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [ReactiveFormsModule],
            providers: [
                FormBuilder,
                {
                    provide:Router,
                    useValue: route
                },
                {
                    provide: GetFeatureService,
                    useValue: getFeatureService
                }
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('onSubmit', () => {
        it('should set user data', () => {
            component.loginForm.setValue(validFormdata);
            expect(component.user).toEqual(USER_DATA[0]);
        })
        it('should set user data to undefined when login details are invalid', () => {
            component.loginForm.setValue(inValidFormdata);
            expect(component.user).toBeUndefined(); 
        })
    })
});
// further test cases can be added later
