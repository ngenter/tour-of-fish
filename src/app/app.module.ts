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
