import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleRoutingModule } from './shared-module-routing.module';
import { ReadMorePipe } from './pipes/read-more.pipe';
import { ChallengeCardLayoutComponent } from './views/challenge-card-layout/challenge-card-layout.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { components } from './components';
import { views } from './views';



@NgModule({
  declarations: [
    ...components,
    ...views,
    ReadMorePipe
  ],
  imports: [
    CommonModule,
    SharedModuleRoutingModule
  ],
  exports: [
    ChallengeCardLayoutComponent,
    PageNotFoundComponent
  ]
})
export class SharedModuleModule { }
