import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchBarComponent } from '@components';
import { PreviousSearchesComponent } from '@components';
import { ListItemComponent } from '@components';
import { GridItemComponent } from '@components';
import { GithubService, StorageService } from '@services';

@NgModule({
  declarations: [LandingPageComponent, SearchBarComponent, PreviousSearchesComponent, ListItemComponent, GridItemComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    GithubService,
    StorageService
  ]
})
export class LandingModule { }
