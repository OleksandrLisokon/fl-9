import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LessonComponent } from './lesson/lesson.component';
import { ModalComponent } from './modal/modal.component';
import { LessonService } from './lesson.service';

@NgModule({
  declarations: [
    AppComponent,
    LessonComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LessonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
