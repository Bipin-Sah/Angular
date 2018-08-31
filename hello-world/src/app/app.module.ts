import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CoursesComponentComponent } from './courses-component/courses-component.component';
import { CourseComponent } from './CourseComponent'
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponentComponent,CourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
