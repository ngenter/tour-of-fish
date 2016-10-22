import { Component, OnInit } from '@angular/core';
import { TourService } from './tour.service';
import { Species } from './species';

@Component ({
    selector: 'tour-component',
    templateUrl: './tour.component.html',
    styleUrls: ['./tour.component.css'],
    
    
})
export class TourComponent implements OnInit {
    title = 'Tour of Fish';
    
    FISH: Species[];
    
    selectedSpecies: Species;

    constructor(private tourService: TourService) {}

    getFish(): void {
        this.tourService.getFish().then(fish => this.fish = fish);
    }
    ngOnInit(): void {
        this.getFish();
    }

    onSelect(Species: Species): void {
        this.selectedSpecies = Species;
    }
    

}