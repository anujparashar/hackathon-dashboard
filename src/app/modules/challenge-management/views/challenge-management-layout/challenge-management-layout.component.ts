import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-challenge-management-layout',
  templateUrl: './challenge-management-layout.component.html',
  styleUrls: ['./challenge-management-layout.component.scss']
})
export class ChallengeManagementLayoutComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
