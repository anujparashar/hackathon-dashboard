import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginLayoutComponent } from './views/login-layout/login-layout.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginFooterComponent } from './components/login-footer/login-footer.component';
import { LoginHeaderComponent } from './components/login-header/login-header.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginLayoutComponent,
    LoginPageComponent,
    LoginFooterComponent,
    LoginHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthenticationRoutingModule
  ]
})
export class Authentication { }
