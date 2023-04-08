import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnotateDetailComponent } from './anotate-detail/anotate-detail.component';
import { DummyCompComponent } from './Dictionary-FormDetail/dictionary-FormDetail.component';
import { DictionaryModule } from './Modules/dictionary/dictionary.module';

const routes: Routes = [
  { path:"",component : DummyCompComponent},
  { path: 'keyUser', loadChildren: () => import('./Modules/dictionary/dictionary.module').then(m => m.DictionaryModule) },
  { path: 'anotate', loadChildren: () => import('./Modules/annotation/annotation.module').then(m => m.AnnotationModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
