import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge-tags',
  templateUrl: './challenge-tags.component.html',
  styleUrls: ['./challenge-tags.component.scss']
})
export class ChallengeTagsComponent implements OnInit {
  @Input('tags') tags: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
