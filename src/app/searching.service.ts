import { Injectable } from '@angular/core';
import { URLs } from './urls';
import { HttpClient } from '@angular/common/http';

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
}
