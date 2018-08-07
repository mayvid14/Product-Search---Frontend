import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, fromEvent } from 'rxjs';
import { map, tap, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import {  } from 'rxjs/internal/operators/distinctUntilChanged';

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

  constructor(private fb: FormBuilder) { }

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
    ).subscribe(val => this.options = val,
    err => console.log(err));

    fromEvent(document.getElementById('loc'), 'input').pipe(
      map((val: any) => val.target.value),
      map(val => val.trim().toLowerCase()),
      distinctUntilChanged(),
      debounceTime(750),
      tap(val => console.log(val)),
    ).subscribe(val => this.locations = val,
    err => console.log(err));
  }

}
