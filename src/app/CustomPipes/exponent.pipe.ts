import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponent',
  standalone: true
})
export class ExponentPipe implements PipeTransform {

  transform(value: number, exponent :number): number {
    return Math.pow(value, exponent);
  }

}
