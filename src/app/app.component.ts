import { Component } from '@angular/core';
import { ContactComponent } from './contact.component';

import { Species } from './species';
import { TourService } from './tour.service'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'Tour of Fish';
  fish: Species [];
  
}


