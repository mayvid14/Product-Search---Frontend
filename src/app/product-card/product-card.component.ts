import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() item: any;
  @Input() stores: any;
  count: number;

  constructor() { }

  ngOnInit() {
    this.count = 0;
    this.stores.forEach(store => {
      const feedArr = store.feeds;
      feedArr.forEach(storeFeed => {
        if (this.isAnItemFeed(storeFeed)) {
          this.count++;
        }
      });
    });
  }

  isAnItemFeed(storeFeed: any) {
    let found = false;
    this.item.feeds.forEach(itemFeed => {
      if (itemFeed.id === storeFeed.id) {
        found = true;
      }
    });
    return found;
  }

  isAvailable() {
    return this.item.feeds.length > 0 ? '' : 'unavailable';
  }

  redirect() {
    window.location.href = '/product/' + encodeURI(this.item.name);
  }

  getQuantity() {
    const feedArray = this.item.feeds;
    let quantity = 0;
    feedArray.forEach(feed => quantity += feed.quantity);
    return quantity;
  }

  salePriceAndPriceInStore() {
    let minSP = Number.POSITIVE_INFINITY;
    let minPrice = Number.POSITIVE_INFINITY;
    this.stores.forEach(store => {
      const feedArr = store.feeds;
      feedArr.forEach(storeFeed => {
        this.item.feeds.forEach(itemFeed => {
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
