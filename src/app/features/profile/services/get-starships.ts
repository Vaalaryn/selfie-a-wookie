import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Starship, Starships, StarshipsResult } from '../models/starships';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetStarships {
  private readonly httpClient = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:4200/api-ships.json';

  getAll(): Observable<Starships> {
    return this.httpClient.get<StarshipsResult>(this.apiUrl).pipe(
      map(response => response.results.map(starship => ({name: starship.name, model: starship.model, crew: starship.crew, label: `${starship.name} - ${starship.model} - ${starship.crew}`})))
    );
  }
}
