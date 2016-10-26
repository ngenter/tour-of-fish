import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ContactComponent } from './contact.component';
import { routing } from './app.routing';
import { HomeComponent } from './home.component';
import { TourComponent } from './tour.component';
import { QuizComponent } from './quiz.component';
import { AboutComponent } from './about.component';
import { Injectable } from '@angular/core';
import { Quiz1Component } from './quiz1.component';
import { Quiz2Component } from './quiz2.component';
import { ReviewComponent } from './review.component';

import { TourService } from './tour.service';

@NgModule({
  
  
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    HomeComponent,
    TourComponent,
    QuizComponent,
    AboutComponent,
    Quiz1Component,
    Quiz2Component,
    ReviewComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [TourService],
  bootstrap: [AppComponent, ]
})
export class AppModule { }
