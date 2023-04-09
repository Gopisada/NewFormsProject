import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListofdocumentsComponent } from 'src/app/listofdocuments/listofdocuments.component';

const routes: Routes = [{path:'',component:ListofdocumentsComponent}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AnnotatedDocumentsModule { }
