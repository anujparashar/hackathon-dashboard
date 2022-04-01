import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleRoutingModule } from './shared-module-routing.module';
import { ReadMorePipe } from './pipes/read-more.pipe';
import { ChallengeCardLayoutComponent } from './views/challenge-card-layout/challenge-card-layout.component';
import { ChallengeTitleComponent } from './components/challenge-title/challenge-title.component';
import { ChallengeDescriptionComponent } from './components/challenge-description/challenge-description.component';
import { ChallengeTagsComponent } from './components/challenge-tags/challenge-tags.component';
// import { MaterialModuleShell } from 'src/app/material.module';



@NgModule({
  declarations: [
    ReadMorePipe,
    ChallengeCardLayoutComponent,
    ChallengeTitleComponent,
    ChallengeDescriptionComponent,
    ChallengeTagsComponent
  ],
  imports: [
    CommonModule,
    SharedModuleRoutingModule
    // MaterialModuleShell
  ],
  exports: [
    ChallengeCardLayoutComponent
  ]
})
export class SharedModuleModule { }
