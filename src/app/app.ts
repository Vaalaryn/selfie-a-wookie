import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplaySelfies } from './features/selfies/components/display-selfies/display-selfies';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DisplaySelfies],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('selfie-a-wookie');
}
