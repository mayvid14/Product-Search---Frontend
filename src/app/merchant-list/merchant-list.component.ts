import { Component, OnInit } from '@angular/core';
import { SearchingService } from '../searching.service';
import { Merchant } from '../merchant';

@Component({
  selector: 'app-merchant-list',
  templateUrl: './merchant-list.component.html',
  styleUrls: ['./merchant-list.component.css']
})
export class MerchantListComponent implements OnInit {
  merchants: Merchant[] = [];
  merchantsLd = {};

  constructor(private service: SearchingService) { }

  ngOnInit() {
    this.service.getAllMerchants().subscribe((val: Merchant[]) => {
      this.merchants = val.slice(0, 7);
      this.merchantsLd = this.initLd();
    });
  }

  goto(term: string) {
    window.location.href = './merchant/' + term;
  }

  private initLd() {
    const list = [];
    let index = 0;
    this.merchants.forEach(merchant => {
      list.push({
        '@type': 'ListItem',
        'position': ++index,
        'item': {
          '@type': 'Person',
          'url': 'http://184.72.75.108:8080/merchant/' + encodeURI(merchant.displayName),
          'name': merchant.name
        }
      });
    });
    return {
      '@context': 'http://schema.org',
      '@type': 'ItemList',
      'name': 'Merchant List',
      'description': 'A list of top merchants',
      'itemListElement': list
    };
  }

}
