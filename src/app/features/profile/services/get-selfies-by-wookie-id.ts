import { Injectable } from '@angular/core';
import { Selfies } from '../models/selfies';

@Injectable({
  providedIn: 'root',
})
export class GetSelfies {
  getByWookieId(selfieId: number): Selfies {
    console.log(selfieId);
    return [
      {id: 1, name: "Selfie A"},
      {id: 2, name: "Selfie B "},
      {id: 3, name: "Selfie C"},
    ];
  }
}
