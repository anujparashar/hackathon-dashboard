import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FEATURES } from 'src/app/constants/dashboard-tab-features';
import { MOCK_FEATURES } from 'src/app/mock-data/mock-features';
import { USER_DATA_MOCK } from 'src/app/mock-test-data/mock-user';
import { GetFeatureService } from 'src/app/shell-serivces/get-feature.service';
import { DashboardBodyLayoutComponent } from '../dashboard-body-layout/dashboard-body-layout.component';
import { DashboardHeaderLayoutComponent } from '../dashboard-header-layout/dashboard-header-layout.component';

import { DashboardLayoutComponent } from './dashboard-layout.component';

describe('DashboardLayoutComponent', () => {
    let component: DashboardLayoutComponent;
    let fixture: ComponentFixture<DashboardLayoutComponent>;
    let getFeatureServiceMock = {
        setLoggedInUserFeatures: jasmine.createSpy('setLoggedInUserFeatures'),
        getLoggedInUserFeatures: jasmine.createSpy('getLoggedInUserFeatures').and.callFake(() => {
            return ["manage-challenges"]
        })
    }
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DashboardLayoutComponent,
                DashboardHeaderLayoutComponent,
                DashboardBodyLayoutComponent
            ],
            providers: [
                {
                    provide: GetFeatureService, useValue: getFeatureServiceMock
                }
            ]
        })
            .compileComponents();
        spyOn(window.sessionStorage, 'getItem').and.callFake(() => {
            return JSON.stringify(USER_DATA_MOCK)
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('ngOnInIt', () => {
        it('should initialize component', () => {
            spyOn(component, 'getTabFeatures')
            component.ngOnInit();
            expect(component.tabFeatures).toEqual(FEATURES);
            expect(getFeatureServiceMock.setLoggedInUserFeatures).toHaveBeenCalledWith(USER_DATA_MOCK.roles[0].features);
            expect(component.getTabFeatures).toHaveBeenCalled();
        })
    })

    describe('getTabFeatures', () => {
        it('should set userFeatures', () => {
            component.getTabFeatures();
            expect(component.userFeatures).toEqual(getFeatureServiceMock.getLoggedInUserFeatures())
        })
        it('should set tab features with only manage challenges when view challenge feature is not present in users feature', () => {
            component.getTabFeatures();
            expect(component.tabFeatures).toEqual([{
                key: 'Manage Challenges',
                icon: 'fa-solid fa-gear',
                url: 'manage-challenges',
                featureName: 'manage-challenges',
                multipleFields: []
            }])
        })
    })
});
