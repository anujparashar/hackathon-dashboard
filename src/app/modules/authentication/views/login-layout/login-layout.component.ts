import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-login-layout',
    templateUrl: './login-layout.component.html',
    styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent implements OnInit {

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
        sessionStorage.getItem('isLoggedIn') ? this.router.navigate(['../dashboard'], { relativeTo: this.route }): null;
    }
}
