import { Component } from '@angular/core';

export class Members { 
  name: string;
  age: number;
}

const FAMILY:  Members [] = [
  { age: 34, name: 'Kimberly' },
  { age: 10, name: 'Theresa' },
  { age: 1,  name: 'Khaleesi'},
  { age: 30, name: 'Nicholas' }

];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Family';
  name = 'Kimberly';
}


