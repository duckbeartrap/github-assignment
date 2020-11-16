import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeadingComponent } from '@sharedComponents';


@NgModule({
  declarations: [PageHeadingComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PageHeadingComponent
  ]
})
export class SharedModule { }
