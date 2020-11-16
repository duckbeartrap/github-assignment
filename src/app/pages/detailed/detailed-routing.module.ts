import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailedPageComponent } from './detailed-page/detailed-page.component';


const routes: Routes = [
  { 
    path: '', 
    component: DetailedPageComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailedRoutingModule { }
