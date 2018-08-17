import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchingService } from '../searching.service';
import { GetPriceService } from '../get-price.service';
import { Product } from '../product';
import { Store } from '../store';
import { Feed } from '../feed';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product: Product;
  stores: Store[] = [];
  price: number;
  count: number;
  quantity: number;
  cont: Store[] = [];
  selectedStore: Store;
  productLd = {};
  prodLoaded = false;

  constructor(private route: ActivatedRoute, private service: SearchingService, private pricer: GetPriceService) { }

  ngOnInit() {
    this.selectedStore = null;
    this.route.url.subscribe(val => {
      const productName = val[1].toString();
      this.service.getDetailsForProductPage(productName).subscribe((el: any[]) => {
        // FIXME: Use first onr for local db, second for prod db

        // this.product = el[0][0];
        this.product = el[0];

        this.stores = el[1];
        this.price = this.pricer.salePriceAndPriceInStore(this.stores, this.product).salePrice;
        this.count = 0;
        this.stores.forEach(store => {
          const feedArr = store.feeds;
          feedArr.forEach(storeFeed => {
            if (this.isAnItemFeed(storeFeed)) {
              this.count++;
            }
          });
        });
        this.cont = this.productStores();
        this.selectedStore = this.cont ? this.cont[0] : null;
        this.quantity = this.getQuantity() || 0;
        this.productLd = this.initLd();
      });
    });
  }

  private isAnItemFeed(storeFeed: Feed) {
    let found = false;
    this.product.feeds.forEach(itemFeed => {
      if (itemFeed.id === storeFeed.id) {
        found = true;
      }
    });
    return found;
  }

  private initLd() {
    this.prodLoaded = true;
    return {
      '@context': 'http://www.schema.org',
      '@type': 'product',
      'name': this.product.name,
      'image': this.product.imageUrl,
      'description': this.product.description
    };
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
    return isFinite(price);
  }

}
