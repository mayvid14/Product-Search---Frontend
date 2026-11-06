import { Component, OnInit, Input, Inject, PLATFORM_ID, ChangeDetectionStrategy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Store } from '../store';

@Component({
  standalone: false,
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  @Input() store: Store;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
  }
}
