import { Component } from '@angular/core';

@Component({
    selector: 'review-component',
    templateUrl: './review.component.html',
    styleUrls: ['./review.component.css']
    

})

export class ReviewComponent {
    onClicked() {
        alert('Thank you');
    }
}