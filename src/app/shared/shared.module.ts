import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeadingComponent, NotFoundComponent, LoaderComponent } from '@sharedComponents';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PageHeadingComponent, NotFoundComponent, LoaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PageHeadingComponent,
    NotFoundComponent, 
    LoaderComponent
  ]
})
export class SharedModule { }
