import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderText',
  standalone: true
})
export class GenderTextPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 0: return 'Male';
      case 1: return 'Female';
      default: return 'Unknown';
    }
  }
}