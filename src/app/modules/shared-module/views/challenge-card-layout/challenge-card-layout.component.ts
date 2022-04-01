import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-challenge-card-layout',
    templateUrl: './challenge-card-layout.component.html',
    styleUrls: ['./challenge-card-layout.component.scss']
})
export class ChallengeCardLayoutComponent implements OnInit {
@Input('card') card: any;
    constructor() { }

    ngOnInit(): void {
    }
}
