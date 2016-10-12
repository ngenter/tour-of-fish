import { Component } from '@angular/core';

export class Species { 
  id: number;
  name: string
}



const FISH:  Species [] = [
  { id: 1, name: 'Steelhead' },
  { id: 2, name: 'Bluegill' },
  { id: 3, name: 'Northern Pike'},
  { id: 4, name: 'Walleye' },
  { id: 5, name: 'Sunfish' },
  { id: 6, name: 'Perch' },
  { id: 7, name: 'Crappie' }

];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'Tour of Fish';
  fish = FISH;
}


