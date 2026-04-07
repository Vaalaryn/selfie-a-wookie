import { Component } from '@angular/core';

@Component({
  selector: 'app-display-selfies',
  imports: [],
  templateUrl: './display-selfies.html',
  styleUrl: './display-selfies.css'
})
export class DisplaySelfies {
  protected readonly title = 'Display Selfies';
  protected readonly selfies = ['Coucou', 'Moi devant Tatouine', 'AAHAHHAHAHHHAHAH'];
  // protected readonly selfies = [];
}
