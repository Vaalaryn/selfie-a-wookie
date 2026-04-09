import { Injectable } from '@angular/core';
import { Planets } from '../models/planet';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetPlanets {
  getAll(): Observable<Planets> {
    return new Observable(observer => {
      observer.next([
        { id: 1, name: 'Tatouine', size: 2 },
        { id: 2, name: 'Naboo', size: 4 },
        { id: 3, name: 'Kamino', size: 8 },
        { id: 4, name: 'Coruscant', size: 12 },
        { id: 5, name: 'Terre', size: 15 }
      ]);
    });
  }


  getAllOf(): Observable<Planets> {
    return of([
      { id: 1, name: 'Tatouine', size: 2 },
      { id: 2, name: 'Naboo', size: 4 },
      { id: 3, name: 'Kamino', size: 8 },
      { id: 4, name: 'Coruscant', size: 12 },
      { id: 5, name: 'Terre', size: 15 }
    ]);
  }
}
