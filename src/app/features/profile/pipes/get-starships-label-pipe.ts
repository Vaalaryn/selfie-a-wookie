import { Pipe, PipeTransform } from '@angular/core';
import { Starship } from '../models/starships';

@Pipe({
  name: 'getStarshipsLabel'
})
export class GetStarshipsLabelPipe implements PipeTransform {
  transform(value: Starship, ...args: unknown[]): string {
    return `${value.name} - ${value.model} - ${value.crew}`;
  }
}
