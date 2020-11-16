import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { DetailedRoutingModule } from './detailed-routing.module';
import { DetailedPageComponent } from './detailed-page/detailed-page.component';
import { GithubService } from '@services';

@NgModule({
  declarations: [DetailedPageComponent],
  imports: [
    CommonModule,
    DetailedRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    GithubService
  ]
})
export class DetailedModule { }
