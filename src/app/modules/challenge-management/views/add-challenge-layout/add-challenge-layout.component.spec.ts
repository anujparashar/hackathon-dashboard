import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { DashboardService } from 'src/app/modules/dashboard/services/dashboard.service';

import { AddChallengeLayoutComponent } from './add-challenge-layout.component';

describe('AddChallengeLayoutComponent', () => {
    let component: AddChallengeLayoutComponent;
    let fixture: ComponentFixture<AddChallengeLayoutComponent>;
    let dashboardServiceMock = {
        addChallenge: jasmine.createSpy('addChallenge')
    }
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AddChallengeLayoutComponent],
            providers: [{
                provide: DashboardService,
                useValue: dashboardServiceMock
            },
            {
                provide: FormBuilder
            }]
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

    describe('onSubmit' , () => {
        
    })
});
