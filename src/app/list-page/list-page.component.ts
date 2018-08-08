import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { SearchingService } from '../searching.service';

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

  constructor(private route: ActivatedRoute, private service: SearchingService) { }

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
    // console.log(this.route);
  }

}
