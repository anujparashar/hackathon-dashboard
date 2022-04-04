import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-view-challenges-layout',
    templateUrl: './view-challenges-layout.component.html',
    styleUrls: ['./view-challenges-layout.component.scss']
})
export class ViewChallengesLayoutComponent implements OnInit {

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void { }

    addChallenge() {
        this.router.navigate(['add-challenge'], { relativeTo: this.route })
    }

    deleteChallenge() {
        this.router.navigate(['delete-challenge'], { relativeTo: this.route })
    }

}
