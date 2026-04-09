import { Component, signal } from '@angular/core';
import { Profile } from './features/profile/components/profile/profile';
import { Header } from './core/components/header/header';

@Component({
  selector: 'app-root',
  imports: [Profile, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('selfie-a-wookie');
}
