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
  private readonly getPlanets = inject(GetPlanets);

  protected planets: Planets = [];

  ngOnInit(): void {
    this.getPlanets.getAll().subscribe({
      next: (planets) => {
        this.planets = planets;
      }
    });
  }
}
