import { Injectable } from '@angular/core';
import { Store } from './store';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class GetPriceService {

  constructor() { }

  salePriceAndPriceInStore(stores: Store[], item: Product) {
    let minSP = Number.POSITIVE_INFINITY;
    let minPrice = Number.POSITIVE_INFINITY;
    stores.forEach(store => {
      const feedArr = store.feeds;
      feedArr.forEach(storeFeed => {
        item.feeds.forEach(itemFeed => {
          if (itemFeed.id === storeFeed.id) {
            const SP = itemFeed.salePrice;
            const P = itemFeed.price;
            minSP = SP < minSP ? SP : minSP;
            minPrice = P < minPrice ? P : minPrice;
          }
        });
      });
    });
    return {
      salePrice : minSP,
      price: minPrice
    };
  }
}
