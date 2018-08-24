import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { SearchingService } from '../searching.service';
import { PriceSortPipe } from '../price-sort.pipe';
import { ShowAvailablePipe } from '../show-available.pipe';
import { Product } from '../product';
import { Store } from '../store';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  type: string;
  head: string;
  products: Product[] = [];
  ascending: Boolean;
  stores: Store[] = [];
  show: Boolean;
  temp: Product[] = [];
  productsLd = {};
  prodsLoaded = false;
  start = 0;

  constructor(
    private route: ActivatedRoute,
    private service: SearchingService,
    private sorter: PriceSortPipe,
    private hider: ShowAvailablePipe
  ) { }

  ngOnInit() {
    this.route.url.subscribe(val => {
      this.type = val[0].path;
      this.head = val[1].path;
      this.findByType(this.type);
    });
    this.ascending = true;
    this.show = false;
  }

  private findByType(term: string) {
    if (term === 'merchant') {
      this.service.getMerchantProducts(this.head).subscribe((el: any[]) => {
        this.products = el[0];
        this.head = el[1];
        this.stores = el[2];
        this.onScroll();
        this.productsLd = this.initLd();
      });
    } else if (term === 'category') {
      this.service.getCategoryProducts(this.head).subscribe((el: any[]) => {
        this.products = el[0];
        this.head = el[1];
        this.stores = el[2];
        this.onScroll();
        this.productsLd = this.initLd();
      });
    } else if (term === 'store') {
      this.service.getStoreProducts(this.head).subscribe((el: any[]) => {
        this.products = el[0];
        this.head = el[1];
        this.stores = el[2];
        this.onScroll();
        this.productsLd = this.initLd();
      });
    }
  }

  sortByPrice() {
    this.ascending = !this.ascending;
    this.temp = this.sorter.transform(this.temp, this.stores, this.ascending);
  }

  hide() {
    const object = this.hider.transform(this.products);
    if (this.show) {
      this.temp = object.is.concat(object.oos);
    } else {
      this.temp = object.is;
    }
    this.show = !this.show;
  }

  onScroll() {
    this.temp = this.temp.length !== 0 ?
      this.temp.concat(this.products.slice(this.start, this.start + 7)) :
      this.products.slice(this.start, this.start + 7);
    this.start += 7;
  }

  initLd() {
    const list = [];
    let index = 0;
    this.products.forEach(product => {
      list.push({
        '@type': 'ListItem',
        'position': ++index,
        'item': {
          '@type': 'Product',
          'url': 'http://184.72.75.108:8080/product/' + encodeURI(product.name),
          'name': product.name
        }
      });
    });
    this.prodsLoaded = true;
    return {
      '@context': 'http://schema.org',
      '@type': 'ItemList',
      'name': 'Products',
      'description': 'A list of products',
      'itemListElement': list
    };
  }

}
