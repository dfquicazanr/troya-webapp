import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toPercentage'
})
export class ToPercentagePipe implements PipeTransform {

  transform(value: number): any {
    return `${value * 100}%`;
  }

}
