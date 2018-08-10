import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchingService } from '../searching.service';
import { GetPriceService } from '../get-price.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product: any;
  stores = [];
  price: number;
  count: number;
  quantity: number;
  cont = [];
  selectedStore: any;

  constructor(private route: ActivatedRoute, private service: SearchingService, private pricer: GetPriceService) { }

  ngOnInit() {
    this.selectedStore = {latitude: 0, longitude: 0};
    this.route.url.subscribe(val => {
      const productName = val[1].toString();
      // console.log(productName);
      this.service.getDetailsForProductPage(productName).subscribe((el: any[]) => {
        // FIXME: Use first onr for local db, second for prod db

        // this.product = el[0][0];
        this.product = el[0];

        this.stores = el[1];
        // console.log(this.product, this.stores);
        this.price = this.pricer.salePriceAndPriceInStore(this.stores, this.product).salePrice;
        this.count = 0;
        // console.log(this.product, this.stores);
        this.stores.forEach(store => {
          const feedArr = store.feeds;
          feedArr.forEach(storeFeed => {
            if (this.isAnItemFeed(storeFeed)) {
              this.count++;
            }
          });
          // console.log(store);
        });
        this.cont = this.productStores();
        this.selectedStore = this.cont ? this.cont[0] : {latitude: 0, longitude: 0};
        this.quantity = this.getQuantity() || 0;
        // console.log('**************************************************');
        // console.log(this.product, this.stores, this.selectedStore);
      });
    });
  }

  private isAnItemFeed(storeFeed: any) {
    // console.log('Is an item feed');
    let found = false;
    this.product.feeds.forEach(itemFeed => {
      if (itemFeed.id === storeFeed.id) {
        found = true;
      }
    });
    return found;
  }

  getQuantity() {
    const feedArray = this.product ? this.product.feeds : [];
    let quantity = 0;
    feedArray.forEach(feed => quantity += feed.quantity);
    return quantity;
  }

  private productStores() {
    const containingStores = [];
    this.stores.forEach(store => {
      const storeFeeds = store.feeds;
      storeFeeds.forEach(storeFeed => {
        this.product.feeds.forEach(itemFeed => {
          if (itemFeed.id === storeFeed.id) {
            containingStores.push(store);
          }
        });
      });
    });
    return containingStores;
  }

  isFinite(price: any) {
    // console.log(price);
    return isFinite(price);
  }

}
