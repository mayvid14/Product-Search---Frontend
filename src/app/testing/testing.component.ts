import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  arr = [
    {a : 4},
    {a : 2},
    {a : 1},
    {a : 3},
    {a : 5},
  ];
  ascending = true;
  array: any;

  constructor() { }

  ngOnInit() {
    this.array = of(this.arr);
  }

  sort() {
    if (this.ascending) {
      this.arr.sort(this.cmpfun);
    } else {
      this.arr.sort(this.cmpfun).reverse();
    }

    console.log(this.arr);
    this.ascending = !this.ascending;
  }

  cmpfun(a, b) {
    if (a.a < b.a) {
      return -1;
    } else if (a.a > b.a) {
      return 1;
    } else {
      return 0;
    }
  }

}
