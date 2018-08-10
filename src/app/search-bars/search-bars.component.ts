import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, fromEvent } from 'rxjs';
import { map, tap, distinctUntilChanged, debounceTime, switchMap, filter } from 'rxjs/operators';
import { SearchingService } from '../searching.service';

@Component({
  selector: 'app-search-bars',
  templateUrl: './search-bars.component.html',
  styleUrls: ['./search-bars.component.css']
})
export class SearchBarsComponent implements OnInit {
  @Input() type: string;
  form: FormGroup;
  options = [];
  locations = [];
  temp = [];

  constructor(private fb: FormBuilder, private service: SearchingService) { }

  ngOnInit() {
    this.form = this.fb.group({
      search: ['', [Validators.required]],
      location: ['']
    });

    fromEvent(document.getElementById('src'), 'input').pipe(
      map((val: any) => val.target.value),
      map(val => val.trim().toLowerCase()),
      distinctUntilChanged(),
      debounceTime(750),
      tap(val => console.log(val)),
    ).subscribe(val => {
      this.options.splice(0);
      this.temp.forEach(e => {
        if (e.name.toLowerCase().indexOf(val) >= 0) {
          this.options.push(e);
        }
      });
      this.options.splice(5);
    });

    /*fromEvent(document.getElementById('loc'), 'input').pipe(
      map((val: any) => val.target.value),
      map(val => val.trim().toLowerCase()),
      distinctUntilChanged(),
      debounceTime(750),
      tap(val => console.log(val)),
    ).subscribe();*/

    switch (this.type) {
      case 'product':
        this.service.getAllProducts().subscribe((val: any[]) => this.temp = val);
        break;
      case 'merchant':
        this.service.getAllMerchants().subscribe((val: any[]) => this.temp = val);
        break;
      case 'category':
        this.service.getAllCategories().subscribe((val: any[]) => this.temp = val);
        break;
      case 'store':
        this.service.getAllStores().subscribe((val: any[]) => this.temp = val);
        break;
      default:
        this.service.getAllCategories().subscribe((val: any[]) => {
          this.temp = val;
          this.service.getAllMerchants().subscribe((el: any[]) => el.forEach(e => this.temp.push(e)));
        });
        break;
    }
  }

  search() {
    if (this.type === 'home') {
      let found = false;
      this.service.getAllMerchants().subscribe((val: any[]) => {
        val.forEach(merchant => {
          if (merchant.displayName === this.form.value.search) {
            found = true;
          }
        });
        found ?
          window.location.href = '/merchant/' + encodeURI(this.form.value.search) :
          window.location.href = '/category/' + encodeURI(this.form.value.search);
      });
    } else {
      window.location.href = '/' + this.type + '/' + encodeURI(this.form.value.search);
    }
  }
}
