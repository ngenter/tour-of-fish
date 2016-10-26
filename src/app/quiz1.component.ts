import { Component, EventEmitter, Output, } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';




@Component({
    selector: 'quiz1',
    templateUrl: './quiz1.component.html',
})

export class Quiz1Component {
    
    constructor(
        private router: Router) {};
    
    question1 = "The freshwater variant of a Steelhead is known as a rainbow trout.";
   onClicked () {
       console.log('It worked!'); 
       this.router.navigate(['/quiz2']);
   }

}

/* [routerLink]="['/quiz1']" */ 