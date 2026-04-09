import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PlanetWeather } from '../models/planet-weather';

@Injectable({
  providedIn: 'root',
})
export class GetWeather {
  getWeatherFromPlanet(planetId: number | null): Observable<PlanetWeather> {
    return of(
      { planet: "Naboo", weather: 0, temperature: 22 }
    );
  }
}
