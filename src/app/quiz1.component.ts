import { Component, EventEmitter, Output} from '@angular/core'

@Component({
    selector: 'quiz1',
    templateUrl: './quiz1.component.html',
})

export class Quiz1Component {
    question1 = "The freshwater variant of a Steelhead is known as a rainbow trout.";
    @Output() clicked = new EventEmitter<string>();
    onClicked() {
        this.clicked.emit('It works!');
    }

}