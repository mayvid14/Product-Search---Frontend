import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, fromEvent } from 'rxjs';
import {  } from 'rxjs/operator';

@Component({
  selector: 'app-search-bars',
  templateUrl: './search-bars.component.html',
  styleUrls: ['./search-bars.component.css']
})
export class SearchBarsComponent implements OnInit {
  @Input() type: string;
  form: FormGroup;
  optObservable: Observable<any>;
  locObservable: Observable<any>;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      search: ['', [Validators.required]],
      location: ['']
    });

    fromEvent(document.getElementById('src'), 'input');
  }

}
