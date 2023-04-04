import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnotateDetailComponent } from './anotate-detail/anotate-detail.component';
import { DummyCompComponent } from './dummy-comp/dummy-comp.component';

const routes: Routes = [{path:'keyUser',component:DummyCompComponent},
{path:'anotate',component:AnotateDetailComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
