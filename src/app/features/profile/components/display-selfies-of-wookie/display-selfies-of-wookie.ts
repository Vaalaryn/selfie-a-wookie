import { Component, Input } from '@angular/core';
import { Selfies } from '../../models/selfies';

@Component({
  selector: 'app-display-selfies-of-wookie',
  imports: [],
  templateUrl: './display-selfies-of-wookie.html',
  styleUrl: './display-selfies-of-wookie.css',
})
export class DisplaySelfiesOfWookie {
  @Input() selfies: Selfies = [];
}
