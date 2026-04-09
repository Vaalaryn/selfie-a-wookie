import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherIcon'
})
export class WeatherIconPipe implements PipeTransform {
  transform(value: number | undefined, ...args: unknown[]): string {
    switch (value) {
      case -100:
        return 'bolt';
      case -1:
        return 'weather_mix';
      case 0:
        return 'cloud';
      case 1:
        return 'clear_day';
    }

    return 'question_mark';
  }
}
