import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { USER_DATA } from 'src/app/mock-data/user-data';
import { LoginForm } from '../../interfaces/login-form';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit(): void { }

    onSubmit(formData: LoginForm) {
        const user = USER_DATA.users.find(
            (user) => user.userId === formData.username
        );
        user
            ? sessionStorage.setItem('isLoggedIn', 'true')
            : sessionStorage.setItem('isLoggedIn', 'false');
        this.router.navigate(['dashboard']);
    }
}

