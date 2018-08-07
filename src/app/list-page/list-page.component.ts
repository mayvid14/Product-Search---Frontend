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
  products = [];

  constructor(private route: ActivatedRoute, private service: SearchingService) { }

  ngOnInit() {
    this.route.url.subscribe(val => {
      this.type = val[0].path;
      this.service.getMerchantProducts(val[1].path).subscribe((el: any[]) => this.products = el);
    });
    // console.log(this.route);
  }

}
