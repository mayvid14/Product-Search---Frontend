import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'showAvailable'
})
export class ShowAvailablePipe implements PipeTransform {

  transform(array: Product[]): any {
    const popped: Product[] = [];
    const remain: Product[] = [];
    array.forEach(el => {
      if (el.feeds.length === 0) {
        popped.push(el);
      } else {
        remain.push(el);
      }
    });
    return {
      is: remain,
      oos: popped
    };
  }

}
