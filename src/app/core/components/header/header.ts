import { Component } from '@angular/core';
import { DisplayWeather } from '../display-weather/display-weather';

@Component({
  selector: 'app-header',
  imports: [DisplayWeather],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  protected planetId = 1;
}
