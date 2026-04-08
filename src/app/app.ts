import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplaySelfies } from './features/selfies/components/display-selfies/display-selfies';
import { Profile } from './features/profile/components/profile/profile';
import { DisplayStats } from './features/statistique/components/display-stats/display-stats';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DisplaySelfies, Profile, DisplayStats],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('selfie-a-wookie');
}
