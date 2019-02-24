import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowTitleComponent } from './show-title/show-title.component';
import { PaperFormComponent } from './paper-form/paper-form.component';
import { PaperEditorComponent } from './paper-editor/paper-editor.component';
import { AddAuthorModalComponent } from './add-author-modal/add-author-modal.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowTitleComponent,
    PaperFormComponent,
    PaperEditorComponent,
    AddAuthorModalComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AddAuthorModalComponent
  ]
})
export class AppModule { }
