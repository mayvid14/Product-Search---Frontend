import { Component, OnInit } from '@angular/core';
import { SearchingService } from '../searching.service';

@Component({
  selector: 'app-merchant-list',
  templateUrl: './merchant-list.component.html',
  styleUrls: ['./merchant-list.component.css']
})
export class MerchantListComponent implements OnInit {
  merchants = [];

  constructor(private service: SearchingService) { }

  ngOnInit() {
    this.service.getAllMerchants().subscribe((val: any[]) => this.merchants = val.slice(0, 7));
  }

  goto(term: string) {
    window.location.href = './merchant/' + term;
  }

}
