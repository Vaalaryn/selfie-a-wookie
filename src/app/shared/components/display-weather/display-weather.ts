import { Component, inject, Input, OnInit } from '@angular/core';
import { GetWeather } from '../../services/get-weather';
import { PlanetWeather } from '../../models/planet-weather';
import { WeatherIconPipe } from '../../pipe/weather-icon-pipe';

@Component({
  selector: 'app-display-weather',
  imports: [
    WeatherIconPipe
  ],
  templateUrl: './display-weather.html',
  styleUrl: './display-weather.css'
})
export class DisplayWeather implements OnInit {
  private getWeather = inject(GetWeather);
  @Input() planetId: number | null = null;
  protected planetWeather: PlanetWeather | null = null;

  ngOnInit() {
    this.getWeather.getWeatherFromPlanet(this.planetId).subscribe({
        next: planetWeather => {
          this.planetWeather = planetWeather;
        }
      }
    );
  }
}
