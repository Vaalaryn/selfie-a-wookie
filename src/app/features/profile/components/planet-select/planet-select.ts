import { Component } from '@angular/core';
import { Planet } from '../../models/planet';

@Component({
  selector: 'planet-select',
  imports: [],
  templateUrl: './planet-select.html',
  styleUrl: './planet-select.css'
})
export class PlanetSelect {
  protected readonly planets: Planet[] = [
    { id: 1, name: 'Tatouine', size: 2 },
    { id: 2, name: 'Naboo', size: 4 },
    { id: 3, name: 'Kamino', size: 8 },
    { id: 4, name: 'Coruscant', size: 12 }
  ];
}
