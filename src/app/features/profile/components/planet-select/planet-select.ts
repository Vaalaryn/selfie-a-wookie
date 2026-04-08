import { Component, inject, OnInit } from '@angular/core';
import { Planets } from '../../models/planet';
import { GetPlanets } from '../../services/get-planets';

@Component({
  selector: 'planet-select',
  imports: [],
  templateUrl: './planet-select.html',
  styleUrl: './planet-select.css'
})
export class PlanetSelect implements OnInit {
  private getPlanets = inject(GetPlanets);

  protected planets: Planets = [];

  ngOnInit() {
    this.getPlanets.getAll().subscribe({
      next: (planets) => {
        this.planets = planets;
      }
    });
  }
}
