import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'locationText',
  standalone: true
})
export class LocationTextPipe implements PipeTransform {
  transform(value: number): string {
    const locations: { [key: number]: string } = {
      0: 'Riyadh',
      1: 'Jeddah',
      2: 'Makkah',
      3: 'Madinah',
      4: 'Dammam',
      5: 'Khobar',
      6: 'Tabuk',
      7: 'Abha',
      8: 'Jazan',
      9: 'Najran',
      10: 'Hail',
      11: 'Buraydah',
      12: 'Al Ahsa',
      13: 'Qatif',
      14: 'Yanbu',
      15: 'Taif',
      16: 'Al Baha',
      17: 'Sakaka',
      18: 'Arar'
    };

    return locations[value] ?? 'Unknown';
  }
}