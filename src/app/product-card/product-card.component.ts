import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() item: any;
  @Input() stores: any;
  count = 0;

  constructor() { }

  ngOnInit() {
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
    this.item.feeds.forEach(itemFeed => {
      if (itemFeed.id === storeFeed.id) {
        return true;
      }
    });
    return false;
  }

}
