import { Component, OnInit, Input } from '@angular/core';
import { Store } from '../store';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  @Input() store: Store;

  constructor() { }

  ngOnInit() {
  }
}
