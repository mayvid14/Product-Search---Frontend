import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageComponent } from './product-page.component';
import { SearchBarsComponent } from '../search-bars/search-bars.component';
import { MatModule } from '../mat/mat.module';
import { GoogleMapComponent } from '../google-map/google-map.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';

describe('ProductPageComponent', () => {
  let component: ProductPageComponent;
  let fixture: ComponentFixture<ProductPageComponent>;
  let mapsAPILoader;

  beforeEach(async(() => {
    mapsAPILoader = new MockMapsAPILoader();
    TestBed.overrideProvider(MapsAPILoader, { useValue: mapsAPILoader});
    TestBed.configureTestingModule({
      declarations: [ProductPageComponent, SearchBarsComponent, GoogleMapComponent],
      imports: [
        MatModule,
        FormsModule,
        ReactiveFormsModule,
        AgmCoreModule,
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        NgxJsonLdModule
      ],
      providers: [MapsAPILoader]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    spyOn(mapsAPILoader, 'load').and.returnValue(new Promise(() => {
      return true;
    }));
    expect(component).toBeTruthy();
  });
});

class MockMapsAPILoader extends MapsAPILoader {
  public load(): Promise<void> {
    return new Promise(() => {
      return true;
    });
  }
}
