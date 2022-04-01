import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { FEATURES } from 'src/app/constants/dashboard-tab-features';

@Component({
    selector: 'app-dashboard-header-layout',
    templateUrl: './dashboard-header-layout.component.html',
    styleUrls: ['./dashboard-header-layout.component.scss']
})
export class DashboardHeaderLayoutComponent implements OnInit {
    features: { key: string; icon: string; }[];

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.features = FEATURES;
        // this.router.events.subscribe((elem) => {
        //     if(elem instanceof NavigationStart){
        //         console.log(elem)

        //     }
        // })
    }

    routes(item) {
        console.log(item.url,'iitem')
        this.router.navigate([item.url], { relativeTo: this.route })
    }

}
