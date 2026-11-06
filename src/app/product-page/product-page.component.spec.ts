import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductPageComponent } from './product-page.component';
import { SearchBarsComponent } from '../search-bars/search-bars.component';
import { MatModule } from '../mat/mat.module';
import { GoogleMapComponent } from '../google-map/google-map.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';

describe('ProductPageComponent', () => {
  let component: ProductPageComponent;
  let fixture: ComponentFixture<ProductPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductPageComponent, SearchBarsComponent, GoogleMapComponent],
      imports: [
        MatModule,
        FormsModule,
        ReactiveFormsModule,
        GoogleMapsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        NgxJsonLdModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: { url: of([new UrlSegment('product', {}), new UrlSegment('test', {})]) } }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
