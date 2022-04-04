import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { USER_TYPE } from 'src/app/interfaces/user';
import { USER_DATA } from 'src/app/mock-data/user-data';
import { GetFeatureService } from 'src/app/shell-serivces/get-feature.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
    loginForm: any;
    user: USER_TYPE;

    constructor(private router: Router, private getFeatureService: GetFeatureService, private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userid: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    onSubmit() {
        //  mock authentication by checcking users credentials with the one present in our database
        this.user = USER_DATA.users.find(
            (user) => user.userId === this.getForm.userid.value
        );

        // set user login status in session based on authentication
        if (this.user) {
            sessionStorage.setItem('isLoggedIn', JSON.stringify({ ...this.user, login: true }));
            // set user info in global service so as to make it accessible throughout
            this.getFeatureService.setLoggedInUserFeatures(this.user.roles[0].features);
        } else {
            sessionStorage.setItem('isLoggedIn', JSON.stringify({ ...this.user, login: false }));
        }
        this.router.navigate(['dashboard']);

    }

    // to get form control details;
    get getForm() {
        return this.loginForm.controls;
    }
}
