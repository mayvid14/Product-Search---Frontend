import { Component, OnInit } from '@angular/core';
import { SearchingService } from '../searching.service';
import { Category } from '../category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  catsLoaded = false;
  categories: Category[] = [];

  constructor(private service: SearchingService) { }

  ngOnInit() {
    this.service.getAllCategories().subscribe((val: Category[]) => {
      this.categories = val.slice(0, 7);
      this.catsLoaded = true;
    });
  }

  goto(term: string) {
    window.location.href = './category/' + term;
  }

}
