import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, fromEvent } from 'rxjs';

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

    fromEvent(document.getElementById('src'), 'input');
  }

}
