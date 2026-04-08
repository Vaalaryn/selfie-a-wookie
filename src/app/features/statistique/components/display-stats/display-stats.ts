import { Component } from '@angular/core';
import { SelfieStats } from '../../models/selfie';

@Component({
  selector: 'app-display-stats',
  imports: [],
  templateUrl: './display-stats.html',
  styleUrl: './display-stats.css'
})
export class DisplayStats {
  protected readonly title = 'Display Stats';

  protected readonly wookies = [
    { id: 1, name: 'Woookie A' },
    { id: 2, name: 'Woookie B' },
    { id: 3, name: 'Woookie C' },
  ];

  protected readonly views = [
    {id: 1, date: new Date(), wookie: this.wookies[1]},
    {id: 2, date: new Date(), wookie: this.wookies[0]},
    {id: 3, date: new Date(), wookie: this.wookies[2]},
    {id: 4, date: new Date(), wookie: this.wookies[1]},
    {id: 5, date: new Date(), wookie: this.wookies[0]},
    {id: 6, date: new Date(), wookie: this.wookies[0]},
    {id: 7, date: new Date(), wookie: this.wookies[2]},
  ];

  protected readonly views2 = [
    {id: 1, date: new Date(), wookie: this.wookies[1]},
    {id: 2, date: new Date(), wookie: this.wookies[0]},
    {id: 3, date: new Date(), wookie: this.wookies[2]},
  ];

  protected readonly stats: SelfieStats = [
    { id: 1, title: "Vacance de wookie A",date: new Date(), views: this.views, wookie: this.wookies[0] },
    { id: 2, title: "Vacance de wookie B",date: new Date(), views: this.views2, wookie: this.wookies[1] },
    { id: 3, title: "Vacance de wookie C",date: new Date(), views: [], wookie: this.wookies[2] },
    { id: 4, title: "Vacance de wookie D",date: new Date(), views: this.views2, wookie: this.wookies[1] },
  ];

  // protected readonly stats: SelfieStats = [];
}
