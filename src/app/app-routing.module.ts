import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AnotateDetailComponent } from './anotate-detail/anotate-detail.component';
import { DummyCompComponent } from './Dictionary-FormDetail/dictionary-FormDetail.component';
import { LoginComponent } from './login/login.component';
import { DictionaryModule } from './Modules/dictionary/dictionary.module';

const routes: Routes = [
  { path:"",component : LoginComponent},
  {path:"dashboard",component:AdminDashboardComponent,children:[{ path: 'keyUser', loadChildren: () => import('./Modules/dictionary/dictionary.module').then(m => m.DictionaryModule) },
  { path: 'anotate', loadChildren: () => import('./Modules/annotation/annotation.module').then(m => m.AnnotationModule) },
  { path: 'anotateddoc', loadChildren: () => import('./Modules/annotateddoclist/annotateddoc.module').then(m => m.AnnotatedDocumentsModule) }
]},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
