import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-challenge-description',
    templateUrl: './challenge-description.component.html',
    styleUrls: ['./challenge-description.component.scss']
})
export class ChallengeDescriptionComponent implements OnInit {
    @Input('description') description: string;
    maxLength = 40;
    constructor() { }

    ngOnInit(): void {
    }

    showAll() {
        this.maxLength = this.description.length;
    }
}
