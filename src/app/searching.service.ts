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

  getMerchantProducts(name: string) {
    return this.http.get(this.url.prefix + this.url.merchantByName + name).pipe(
      flatMap((val: any) => {
        console.log(val.products);
        return of(val.products);
      })
    );
  }
}
