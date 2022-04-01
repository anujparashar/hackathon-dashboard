import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge-description',
  templateUrl: './challenge-description.component.html',
  styleUrls: ['./challenge-description.component.scss']
})
export class ChallengeDescriptionComponent implements OnInit {
@Input('description') description: string;
  constructor() { }

  ngOnInit(): void {
  }

}
