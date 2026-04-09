import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { GetStarships } from '../../services/get-starships';
import { GetStarshipsLabelPipe } from '../../pipes/get-starships-label-pipe';

@Component({
  selector: 'app-starships-select',
  imports: [
    AsyncPipe,
    GetStarshipsLabelPipe
  ],
  templateUrl: './starships-select.html',
  styleUrl: './starships-select.css'
})
export class StarshipsSelect {
  protected starships$ = inject(GetStarships).getAll();
}
