import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-challenge-description',
    templateUrl: './challenge-description.component.html',
    styleUrls: ['./challenge-description.component.scss']
})
export class ChallengeDescriptionComponent implements OnInit {
    @Input('description') description: string;
    maxLength = 40;
    showAllFlag = false;
    constructor() { }

    ngOnInit(): void {
    }

    showAll() {
        this.showAllFlag = true;
        this.maxLength = this.description.length;
    }

    showLess() {
        this.maxLength = 40;
        this.showAllFlag = false;
    }
}
