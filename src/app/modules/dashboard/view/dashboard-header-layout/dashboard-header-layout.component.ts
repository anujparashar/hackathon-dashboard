import { Component, Input, OnInit } from '@angular/core';
import { TAB_FEATURES } from 'src/app/interfaces/tab-features';

@Component({
    selector: 'app-dashboard-header-layout',
    templateUrl: './dashboard-header-layout.component.html',
    styleUrls: ['./dashboard-header-layout.component.scss']
})
export class DashboardHeaderLayoutComponent implements OnInit {
    @Input('tabFeatures') tabFeatures: TAB_FEATURES
    constructor() { }

    ngOnInit(): void {

    }

}
