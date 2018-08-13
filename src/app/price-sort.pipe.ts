import { Pipe, PipeTransform } from '@angular/core';
import { GetPriceService } from './get-price.service';
import { Product } from './product';
import { Store } from './store';

@Pipe({
  name: 'priceSort'
})
export class PriceSortPipe implements PipeTransform {
  constructor(private service: GetPriceService) { }

  transform(array: Product[], stores: Store[], ascending: Boolean): Product[] {
    if (ascending) {
      return array.sort((a, b) => this.numComp(
        this.service.salePriceAndPriceInStore(stores, a).salePrice,
        this.service.salePriceAndPriceInStore(stores, b).salePrice
      ));
    } else {
      return array.sort((a, b) => this.numComp(
        this.service.salePriceAndPriceInStore(stores, b).salePrice,
        this.service.salePriceAndPriceInStore(stores, a).salePrice
      ));
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
