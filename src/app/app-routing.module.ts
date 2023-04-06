import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'keyUser',loadChildren: () => import('./Modules/dictionary/dictionary.module').then(m => m.DictionaryModule)},
{path:'anotate',loadChildren: () => import('./Modules/annotation/annotation.module').then(m => m.AnnotationModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
