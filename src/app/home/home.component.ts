import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeLd = {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    'url': 'http://184.72.75.108:8080',
    'name': 'Product Search',
    'author': {
      '@type': 'Person',
      'name': 'Divyam Nandanwar'
    },
    'description': 'A simple portal for searching products near you',
    'publisher': 'IG pvt ltd',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': 'http://184.72.75.108:8080/product/{search_term}',
      'query-input': 'required name=search_term'
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
