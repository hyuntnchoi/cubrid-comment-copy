import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CommentEditorComponent } from './comment-editor/comment-editor.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    CommentEditorComponent,
    BottomBarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
