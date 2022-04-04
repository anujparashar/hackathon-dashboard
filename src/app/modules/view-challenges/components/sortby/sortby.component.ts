import { Component, Input, OnInit } from '@angular/core';
import { CHALLENGE_TYPE } from 'src/app/interfaces/challenge';
import { DashboardService } from 'src/app/modules/dashboard/services/dashboard.service';

@Component({
	selector: 'app-sortby',
	templateUrl: './sortby.component.html',
	styleUrls: ['./sortby.component.scss']
})
export class SortbyComponent implements OnInit {
	@Input('cards') cards: CHALLENGE_TYPE[];
	challenges: CHALLENGE_TYPE[];
	constructor(private dashboardService: DashboardService) { }

	ngOnInit(): void {
		this.challenges = JSON.parse(JSON.stringify(this.cards));
	}

	sortByLikes() {
		const sortedChallenges = this.cards.sort((val1,val2) => val2.likes.count - val1.likes.count);
		this.dashboardService.updateChallenges(sortedChallenges);

	}

	sortByCreationDate() {
		const dateSortedChallenges = this.cards.sort((val1,val2) => {
			let d1 = new Date(val1.creationDate);
			let d2 = new Date(val2.creationDate);
			return d2.valueOf()-d1.valueOf()
		});
	}

}
