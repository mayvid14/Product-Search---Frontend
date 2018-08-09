import { Component, OnInit, Input } from '@angular/core';
import { GetPriceService } from '../get-price.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() item: any;
  @Input() stores: any;
  count: number;

  constructor(private service: GetPriceService) { }

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
    if (this.isAvailable().length === 0) {
      window.location.href = '/product/' + encodeURI(this.item.name);
    }
  }

  getQuantity() {
    const feedArray = this.item.feeds;
    let quantity = 0;
    feedArray.forEach(feed => quantity += feed.quantity);
    return quantity;
  }

  salePriceAndPriceInStore() {
    return this.service.salePriceAndPriceInStore(this.stores, this.item);
  }

}
