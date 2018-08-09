import { Component, OnInit } from '@angular/core';
import { SearchingService } from '../searching.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories = [];

  constructor(private service: SearchingService) { }

  ngOnInit() {
    this.service.getAllCategories().subscribe((val: any[]) => this.categories = val.slice(0, 7));
  }

  goto(term: string) {
    window.location.href = './category/' + term;
  }

}
