import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DummyCompComponent } from '../../Dictionary-FormDetail/dictionary-FormDetail.component';

const routes: Routes = [{path:'',component:DummyCompComponent}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DictionaryModule { }
