import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DashboardService } from 'src/app/modules/dashboard/services/dashboard.service';

@Component({
    selector: 'app-add-challenge-layout',
    templateUrl: './add-challenge-layout.component.html',
    styleUrls: ['./add-challenge-layout.component.scss']
})
export class AddChallengeLayoutComponent implements OnInit {
    addForm: any;
    submitted: boolean;
    tagList = ['Array', 'String', 'HashTable', 'Graph']
    constructor(private formubilder: FormBuilder, private dashboardService: DashboardService) { }

    ngOnInit(): void {
        this.addForm = this.formubilder.group({
            id: ['', Validators.required],
            title: ['', Validators.required],
            description: ['', Validators.required],
            tags: ['', Validators.required],
            likes: [],
            creationDate: []
        })
    }

    onSubmit() {
        this.submitted = true;
        if(!this.addForm.invalid) {
            const createdMonth = new Date().getMonth();
            const createdDay = new Date().getDate();
            const createdYear = new Date().getFullYear();
            // add challenge with default likes and date of creation
            this.dashboardService.addChallenge({...this.addForm.value , likes:{liked: false,count:0}, creationDate: new Date(createdYear,  createdMonth, createdDay)})
        }
     }

    get f() {
        return this.addForm.controls;
    }

}
