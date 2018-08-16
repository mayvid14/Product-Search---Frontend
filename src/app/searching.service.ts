import { Injectable } from '@angular/core';
import { URLs } from './urls';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchingService {
  url: URLs;
  header: HttpHeaders;

  constructor(private http: HttpClient) {
    this.url = new URLs();
    this.header = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    });
  }

  /*getProducts(term: string) {
    return this.http.get(this.url.prefix + this.url.getProduct + encodeURI(term));
  }*/

  getAllProducts() {
    return this.http.get(this.url.prefix + this.url.allProducts);
  }

  getAllMerchants() {
    return this.http.get(this.url.prefix + this.url.allMerchants);
  }

  getAllCategories() {
    return this.http.get(this.url.prefix + this.url.allCategories);
  }

  getAllStores() {
    return this.http.get(this.url.prefix + this.url.allStores);
  }

  getMerchantProducts(name: string) {
    return this.http.get(this.url.prefix + this.url.merchantByName + name).pipe(
      flatMap((val: any) => {
        return forkJoin(
          of(val.products),
          of(val.name),
          of(val.stores)
        );
      })
    );
  }

  getCategoryProducts(name: string) {
    return this.http.get(this.url.prefix + this.url.categoryByName + name).pipe(
      flatMap((val: any) => {
        return forkJoin(
          of(val[0].products),
          of(val[0].name),
          this.http.get(this.url.prefix + this.url.allStores)
        );
      })
    );
  }

  getStoreProducts(name: string) {
    return this.http.get(this.url.prefix + this.url.storeByName + name).pipe(
      flatMap((val: any) => {
        return forkJoin(
          this.searchStoreProducts(val[0].feeds),
          of(val[0].name),
          this.http.get(this.url.prefix + this.url.allStores)
        );
      })
    );
  }

  getDetailsForProductPage(term: string) {
    return forkJoin(
      this.http.get(this.url.prefix + this.url.productByName + term),
      this.getAllStores()
    );
  }

  searchStoreProducts(storeFeeds: any[]) {
    const products = [];
    this.getAllProducts().subscribe((prods: any) => {
      prods.forEach(prod => {
        prod.feeds.forEach(prodFeed => {
          storeFeeds.forEach(storeFeed => {
            if (storeFeed.id === prodFeed.id) {
              products.push(prod);
            }
          });
        });
      });
    });
    return of(products);
  }
}
