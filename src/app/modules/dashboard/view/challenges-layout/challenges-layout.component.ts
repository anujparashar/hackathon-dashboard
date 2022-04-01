import { Component, OnInit } from '@angular/core';
import { CHALLENGES } from 'src/app/mock-data/challenge-data';

@Component({
    selector: 'app-challenges-layouts',
    templateUrl: './challenges-layout.component.html',
    styleUrls: ['./challenges-layout.component.scss']
})
export class ChallengesLayoutComponent implements OnInit {
    challenges: { title: string; description: string; tags: string[]; }[];

    constructor() { }

    ngOnInit(): void {
        this.challenges = CHALLENGES
    }

}
