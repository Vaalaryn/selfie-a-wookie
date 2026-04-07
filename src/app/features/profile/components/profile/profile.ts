import { Component } from '@angular/core';
import { PlanetSelect } from '../planet-select/planet-select';

@Component({
  selector: 'app-profile',
  imports: [
    PlanetSelect
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {}
