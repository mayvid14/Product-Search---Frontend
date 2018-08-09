import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { SearchingService } from '../searching.service';
import { PriceSortPipe } from '../price-sort.pipe';
import { ShowAvailablePipe } from '../show-available.pipe';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  type: string;
  head: string;
  products = [];
  ascending: Boolean;
  stores = [];
  show: Boolean;
  temp = [];

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
      this.service.getMerchantProducts(this.head).subscribe((el: any[]) => {
        this.products = el[0];
        this.head = el[1];
        this.stores = el[2];
        this.temp = this.products;
      });
    });
    this.ascending = true;
    this.show = true;
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

}
