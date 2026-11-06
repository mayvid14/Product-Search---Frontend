import { BrowserModule } from '@angular/platform-browser';
import { APP_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatModule } from './mat/mat.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SearchBarsComponent } from './search-bars/search-bars.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MerchantListComponent } from './merchant-list/merchant-list.component';
import { ListPageComponent } from './list-page/list-page.component';
import { HomeComponent } from './home/home.component';
import { PriceSortPipe } from './price-sort.pipe';
import { ShowAvailablePipe } from './show-available.pipe';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { CategoryListComponent } from './category-list/category-list.component';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CacheInterceptor } from './cache-interceptor';
import { RequestCacheService } from './request-cache.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarsComponent,
    MerchantListComponent,
    ListPageComponent,
    HomeComponent,
    ProductCardComponent,
    PriceSortPipe,
    ShowAvailablePipe,
    ProductPageComponent,
    GoogleMapComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleMapsModule,
    NgxJsonLdModule,
    InfiniteScrollModule
  ],
  providers: [
    { provide: APP_ID, useValue: 'product-search' },
    RequestCacheService,
    PriceSortPipe,
    ShowAvailablePipe,
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
