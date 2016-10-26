import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { score } from './score';


@Component ({
    selector:'quiz-component',
    templateUrl:'./quiz.component.html',
    styleUrls: ['./quiz.component.css']
})

export class QuizComponent {
    constructor (
        private router: Router) {};
    

    onClicked () {
        console.log('it worked again!');
        this.router.navigate(['/quiz1']);
        
    }

}

/*  onClicked () {
       console.log('It worked!'); 
       this.router.navigate(['/quiz2']);
*/ 