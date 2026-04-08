import { Component, inject, OnInit } from '@angular/core';
import { PlanetSelect } from '../planet-select/planet-select';
import { GetSelfies } from '../../services/get-selfies-by-wookie-id';
import { Selfies } from '../../models/selfies';
import { DisplaySelfiesOfWookie } from '../display-selfies-of-wookie/display-selfies-of-wookie';

@Component({
  selector: 'app-profile',
  imports: [
    PlanetSelect,
    DisplaySelfiesOfWookie
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  private readonly getSelfies = inject(GetSelfies);

  protected wookie = {
    id: 1,
    name: 'Wookie A'
  };

  protected selfies: Selfies = this.getSelfies.getByWookieId(this.wookie.id);
}
