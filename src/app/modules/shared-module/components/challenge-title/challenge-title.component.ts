import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-challenge-title',
    templateUrl: './challenge-title.component.html',
    styleUrls: ['./challenge-title.component.scss']
})
export class ChallengeTitleComponent implements OnInit {
    @Input('title') title: string;

    constructor() { }

    ngOnInit(): void {
    }

}
