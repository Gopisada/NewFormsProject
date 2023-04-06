import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnotateDetailComponent } from '../../anotate-detail/anotate-detail.component';

const routes: Routes = [{path:'',component:AnotateDetailComponent}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AnnotationModule { }
