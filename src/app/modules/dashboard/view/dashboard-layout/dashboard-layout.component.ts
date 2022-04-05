import { Component, OnInit } from '@angular/core';
import { FEATURES } from 'src/app/constants/dashboard-tab-features';
import { TAB_FEATURES } from 'src/app/interfaces/tab-features';
import { GetFeatureService } from 'src/app/shell-serivces/get-feature.service';

@Component({
    selector: 'app-dashboard-layout',
    templateUrl: './dashboard-layout.component.html',
    styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {
    tabFeatures: TAB_FEATURES[];
    userFeatures: string[];

    constructor(
        private getFeatureService: GetFeatureService
    ) { }

    ngOnInit(): void {
        this.tabFeatures = FEATURES;
        // on page reload when user is already loggedin we don't land on authentication page so get user details from session
        this.getFeatureService.setLoggedInUserFeatures(JSON.parse(sessionStorage.getItem('isLoggedIn')).roles[0].features);
        this.getTabFeatures();
    }

    getTabFeatures() {
        this.userFeatures = this.getFeatureService.getLoggedInUserFeatures();
        // if want to turnoff any of the feature for any user (for any reason like some big failure in that particular module),
        //  just remove featureName from FEATURES in constant file
        const tabs = this.tabFeatures.filter((val) => {
            return this.userFeatures.includes(val.featureName);
        });

        this.tabFeatures = tabs;
    }
}
