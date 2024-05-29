import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { PageCourseComponent } from './component/page-course/page-course.component';
import { IntroComponent } from './component/intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
 
    HeaderComponent,
    FooterComponent,
    PageCourseComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
