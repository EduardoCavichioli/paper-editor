import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaperEditorComponent } from './paper-editor/paper-editor.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'paper', component: PaperEditorComponent },
  { path:'about', component: AboutComponent },
  {
    path: '',
    redirectTo: '/paper',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
