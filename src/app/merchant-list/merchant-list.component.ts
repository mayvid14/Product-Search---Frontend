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

  constructor(private service: SearchingService) { }

  ngOnInit() {
    this.service.getAllMerchants().subscribe((val: Merchant[]) => this.merchants = val.slice(0, 7));
  }

  goto(term: string) {
    window.location.href = './merchant/' + term;
  }

}
