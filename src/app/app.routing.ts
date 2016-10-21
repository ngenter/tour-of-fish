import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TourComponent } from './tour.component';
import { QuizComponent } from './quiz.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent }, 
    { path: 'tour', component: TourComponent },
    { path: 'quiz', component: QuizComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', component: HomeComponent }

];

export const routing = RouterModule.forRoot(APP_ROUTES);