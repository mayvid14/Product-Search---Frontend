import { Injectable } from '@angular/core';
import { URLs } from './urls';
import { HttpClient } from '@angular/common/http';
import { forkJoin, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchingService {
  url: URLs;

  constructor(private http: HttpClient) {
    this.url = new URLs();
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

  getMerchantProducts(name: string) {
    return this.http.get(this.url.prefix + this.url.merchantByName + name).pipe(
      flatMap((val: any) => {
        console.log(val);
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
        console.log(val);
        return forkJoin(
          of(val[0].products),
          of(val[0].name),
          this.http.get(this.url.prefix + this.url.allStores)
        );
      })
    );
  }

  getDetailsForProductPage(term: string) {
    return forkJoin(
      this.http.get(this.url.prefix + this.url.productByName + term),
      this.http.get(this.url.prefix + this.url.allStores)
    );
  }
}
