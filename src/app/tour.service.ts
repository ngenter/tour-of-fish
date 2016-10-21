import { Injectable } from '@angular/core';

import { Species } from './species';
import { FISH } from './mock-fish';

@Injectable()
export class TourService {
    getFish(): Promise<Species[]> {
        return Promise.resolve(FISH);
    }
}

/* export const FISH:  Species [] = [
  { id: 1, name: 'Steelhead' },
  { id: 2, name: 'Bluegill' },
  { id: 3, name: 'Northern Pike'},
  { id: 4, name: 'Walleye' },
  { id: 5, name: 'Sunfish' },
  { id: 6, name: 'Perch' },
  { id: 7, name: 'Crappie' }

];
*/

/* <fish-header></fish-header>
<br><br><br>
<h1>
  {{title}}
</h1>
<h2>List of Fish</h2>
<ul class="fish">
  <li *ngFor="let species of fish">
    <span class="badge">{{species.id}} </span>{{species.name}}
  </li>
</ul>
*/