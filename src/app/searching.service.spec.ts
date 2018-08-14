import { TestBed, inject } from '@angular/core/testing';

import { SearchingService } from './searching.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { URLs } from './urls';
import { Product } from './product';
import { Merchant } from './merchant';

describe('SearchingService', () => {
  let httpMock: HttpTestingController;
  let url: URLs;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchingService],
      imports: [HttpClientTestingModule]
    });

    httpMock = TestBed.get(HttpTestingController);
    url = new URLs();
  });

  it('should be created', inject([SearchingService], (service: SearchingService) => {
    expect(service).toBeTruthy();
  }));

  it('should return all products', inject([SearchingService], (service: SearchingService) => {
    const products: Product[] = [
      { id: 1, name: 'Product 1', rank: 1, feeds: [] },
      { id: 2, name: 'Product 2', rank: 2, feeds: [] },
      { id: 3, name: 'Product 3', rank: 3, feeds: [] },
      { id: 4, name: 'Product 4', rank: 4, feeds: [] },
      { id: 5, name: 'Product 5', rank: 5, feeds: [] },
    ];

    service.getAllProducts().subscribe((res: Product[]) => {
      expect(res.length).toEqual(5);
    });

    const allProducts = httpMock.expectOne(url.prefix + url.allProducts);
    allProducts.flush(products);
    httpMock.verify();
  }));

  // it('should return all merchants', inject([SearchingService], (service: SearchingService) => {
  //   const merchants: Merchant[] = [
  //     { id: 1, name: 'merc', feeds: [], displayName: 'Merc1' },
  //     { id: 2, name: 'Product 2', rank: 2, feeds: [] },
  //     { id: 3, name: 'Product 3', rank: 3, feeds: [] },
  //     { id: 4, name: 'Product 4', rank: 4, feeds: [] },
  //     { id: 5, name: 'Product 5', rank: 5, feeds: [] },
  //   ];

  //   service.getAllProducts().subscribe((res: Product[]) => {
  //     expect(res.length).toEqual(5);
  //   });

  //   const allProducts = httpMock.expectOne(url.prefix + url.allProducts);
  //   allProducts.flush(products);
  //   httpMock.verify();
  // }));
});
