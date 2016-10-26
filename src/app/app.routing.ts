import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TourComponent } from './tour.component';
import { QuizComponent } from './quiz.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { Quiz1Component } from './quiz1.component';
import { Quiz2Component } from './quiz2.component';
import { ReviewComponent } from './review.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent }, 
    { path: 'tour', component: TourComponent },
    { path: 'quiz', component: QuizComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', component: HomeComponent },
    { path: 'quiz1', component: Quiz1Component },
    { path: 'quiz2', component: Quiz2Component },
    { path: 'review', component: ReviewComponent },

];

export const routing = RouterModule.forRoot(APP_ROUTES);