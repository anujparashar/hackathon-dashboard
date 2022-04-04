import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { views } from './views/login-layout';
import { components } from './components';


@NgModule({
  declarations: [
    ...views,
    ...components
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule
  ]
})
export class Authentication { }
