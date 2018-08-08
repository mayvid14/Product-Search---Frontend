import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatModule } from './mat/mat.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SearchBarsComponent } from './search-bars/search-bars.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MerchantListComponent } from './merchant-list/merchant-list.component';
import { ListPageComponent } from './list-page/list-page.component';
import { HomeComponent } from './home/home.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { PriceSortPipe } from './price-sort.pipe';
import { ShowAvailablePipe } from './show-available.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarsComponent,
    MerchantListComponent,
    ListPageComponent,
    HomeComponent,
    ProductCardComponent,
    PriceSortPipe,
    ShowAvailablePipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'product-search' }),
    AppRoutingModule,
    MatModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
