import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any): any {
    return value.toLowerCase().replace(/([\s’.'-]|^)([\wÀ-ž])/g, l => l.toUpperCase());
  }

}
