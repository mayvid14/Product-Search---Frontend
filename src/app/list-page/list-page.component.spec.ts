import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListPageComponent } from './list-page.component';
import { SearchBarsComponent } from '../search-bars/search-bars.component';
import { MatModule } from '../mat/mat.module';
import { ProductCardComponent } from '../product-card/product-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { of } from 'rxjs';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PriceSortPipe } from '../price-sort.pipe';
import { ShowAvailablePipe } from '../show-available.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';

describe('ListPageComponent', () => {
  let component: ListPageComponent;
  let fixture: ComponentFixture<ListPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListPageComponent,
        SearchBarsComponent,
        ProductCardComponent
      ],
      imports: [
        MatModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        NgxJsonLdModule,
        InfiniteScrollModule
      ],
      providers: [
        PriceSortPipe,
        ShowAvailablePipe,
        { provide: ActivatedRoute, useValue: { url: of([new UrlSegment('merchant', {}), new UrlSegment('test', {})]) } }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
