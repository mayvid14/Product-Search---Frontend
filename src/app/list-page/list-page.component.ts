import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { SearchingService } from '../searching.service';
import { PriceSortPipe } from 'src/app/price-sort.pipe';

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

  constructor(private route: ActivatedRoute, private service: SearchingService, private sorter: PriceSortPipe) { }

  ngOnInit() {
    this.route.url.subscribe(val => {
      this.type = val[0].path;
      this.head = val[1].path;
      this.service.getMerchantProducts(this.head).subscribe((el: any[]) => {
        this.products = el[0];
        this.head = el[1];
        this.stores = el[2];
      });
    });
    this.ascending = true;
    this.show = false;
    // console.log(this.route);
  }

  sortByPrice() {
    this.ascending = !this.ascending;
    this.products = this.sorter.transform(this.products, this.stores, this.ascending);
    // console.log(this.products);
  }

  tracker(index: number, item: any) {
    console.log('seek');
    return index;
  }

}
