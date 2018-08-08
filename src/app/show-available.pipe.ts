import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showAvailable'
})
export class ShowAvailablePipe implements PipeTransform {

  transform(array: any[], show: Boolean): any {
    if (!show) {
      return array.filter(el => el.feeds.length > 0);
    } else {
      return array;
    }
  }

}
