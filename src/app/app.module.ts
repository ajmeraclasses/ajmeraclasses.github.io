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
import { VedicMathsComponent } from './vedic-maths/vedic-maths.component';
import { ArtHouseComponent } from './art-house/art-house.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

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
    SectionsComponent,
    VedicMathsComponent,
    ArtHouseComponent,
    ContactUsComponent
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
