import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowTitleComponent } from './show-title/show-title.component';
import { PaperFormComponent } from './paper-form/paper-form.component';
import { PaperEditorComponent } from './paper-editor/paper-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowTitleComponent,
    PaperFormComponent,
    PaperEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
