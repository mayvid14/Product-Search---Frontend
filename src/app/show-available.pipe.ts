import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showAvailable'
})
export class ShowAvailablePipe implements PipeTransform {

  transform(array: any[]): any {
    const popped = [];
    const remain = [];
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
