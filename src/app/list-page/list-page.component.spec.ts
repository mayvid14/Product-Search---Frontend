import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPageComponent } from './list-page.component';
import { SearchBarsComponent } from '../search-bars/search-bars.component';
import { MatModule } from '../mat/mat.module';
import { ProductCardComponent } from '../product-card/product-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PriceSortPipe } from '../price-sort.pipe';
import { ShowAvailablePipe } from '../show-available.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';

describe('ListPageComponent', () => {
  let component: ListPageComponent;
  let fixture: ComponentFixture<ListPageComponent>;

  beforeEach(async(() => {
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
        NgxJsonLdModule
      ],
      providers: [
        PriceSortPipe,
        ShowAvailablePipe
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
