import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HighlightComponent } from './home/highlight/highlight.component';
import { ResultCardComponent } from './result-card/result-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultsComponent } from './results/results.component';
import { ChatButtonComponent } from './chat-button/chat-button.component';
import { OurCoursesComponent } from './our-courses/our-courses.component';
import { SectionsComponent } from './our-courses/sections/sections.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HighlightComponent,
    ResultCardComponent,
    ResultsComponent,
    ChatButtonComponent,
    OurCoursesComponent,
    SectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
