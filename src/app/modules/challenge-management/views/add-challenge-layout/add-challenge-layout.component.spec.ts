import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { DashboardService } from 'src/app/modules/dashboard/services/dashboard.service';

import { AddChallengeLayoutComponent } from './add-challenge-layout.component';

describe('AddChallengeLayoutComponent', () => {
    let component: AddChallengeLayoutComponent;
    let fixture: ComponentFixture<AddChallengeLayoutComponent>;
    let dashboardServiceMock = {
        addChallenge: jasmine.createSpy('addChallenge')
    }
    let invalidformData = {
        id: 1,
        title: 'title',
        description: 'description',
        tags: [],
        likes: {},
        creationDate: ''
    }
    let ValidformData = {
        id: 1,
        title: 'title',
        description: 'description',
        tags: ['tag'],
        likes: {liked: true, count: 0},
        creationDate: (new Date()).toDateString
    }
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            declarations: [AddChallengeLayoutComponent],
            providers: [{
                provide: DashboardService,
                useValue: dashboardServiceMock
            },
            {
                provide: FormBuilder
            }],
            imports: [AngularMaterialModule, BrowserAnimationsModule]
        })
            .compileComponents();
            
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AddChallengeLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // describe('onSubmit', () => {
    //     it('should not update record when form is invalid', () => {
    //         component.addForm.setValue(invalidformData);
    //         component.onSubmit();
    //         expect(dashboardServiceMock.addChallenge).toHaveBeenCalledTimes(0);
    //         expect(component.addForm.valid).toEqual(false);
    //     })
    // })
    describe('onSubmit', () => {
        it('should update record when form is valid', () => {
            component.addForm.setValue(ValidformData);
            component.onSubmit();
            expect(dashboardServiceMock.addChallenge).toHaveBeenCalledTimes(1);
            expect(component.addForm.valid).toEqual(true);
        })
    })
});
