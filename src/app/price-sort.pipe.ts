import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceSort'
})
export class PriceSortPipe implements PipeTransform {

  transform(array: any[], ascending: Boolean): any[] {
    if (ascending) {
      return array.sort((a, b) => this.numComp(a.feeds.salePrice, b.feeds.salePrice));
    } else {
      return array.sort((a, b) => this.numComp(b.feeds.salePrice, a.feeds.salePrice));
    }
  }

  private numComp(a: number, b: number) {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  }

}
