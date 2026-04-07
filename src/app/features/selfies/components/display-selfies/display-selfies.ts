import { Component } from '@angular/core';
import { Selfie, Selfies } from '../../models/selfies';
import { Wookie, Wookies } from '../../../utils/wookie';

@Component({
  selector: 'app-display-selfies',
  imports: [],
  templateUrl: './display-selfies.html',
  styleUrl: './display-selfies.css'
})
export class DisplaySelfies {
  protected readonly wookies: Wookies = [
    {id: 1, name: "Wookie A", age: 50, gender: "M"},
    {id: 2, name: "Wookie B", age: 70, gender: "F"},
    {id: 3, name: "Wookie C", age: 40, gender: "F"}
  ];

  protected readonly title = 'Display Selfies';

  protected readonly selfies: Selfies = [
    { id: 1, title: 'Coucou', description: 'Ceci est une description de post', path: 'https://media.anakinworld.com/uploads/entries/original/espece-wookiees.jpg', wookie: this.wookies[0] },
    { id: 2, title: 'Wookies 1', description: 'Ceci est une description de post', path: 'https://www.starwars-universe.com/images/encyclopedie/especes/images_v6/wookiee_imv6.jpg', wookie: this.wookies[2] },
    { id: 3, title: 'Vacances a tatouines', description: 'Ceci est une description de post', path: 'https://pbs.twimg.com/media/EJ6yRMoXUAAertI.jpg', wookie: this.wookies[2] }
  ];
}
