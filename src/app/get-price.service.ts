import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetPriceService {

  constructor() { }

  salePriceAndPriceInStore(stores: any[], item: any) {
    let minSP = Number.POSITIVE_INFINITY;
    let minPrice = Number.POSITIVE_INFINITY;
    // console.log(stores);
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
