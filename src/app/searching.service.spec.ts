import { TestBed, inject } from '@angular/core/testing';

import { SearchingService } from './searching.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { URLs } from './urls';
import { Product } from './product';
import { Merchant } from './merchant';
import { Store } from './store';
import { Category } from './category';

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

  it('should return all merchants', inject([SearchingService], (service: SearchingService) => {
    const merchants: Merchant[] = [
      { id: 1, name: 'merc', feeds: [], displayName: 'Merc1', mobileNo: '1' },
      { id: 2, name: 'merc', feeds: [], displayName: 'Merc2', mobileNo: '1' },
      { id: 3, name: 'merc', feeds: [], displayName: 'Merc3', mobileNo: '1' },
      { id: 4, name: 'merc', feeds: [], displayName: 'Merc4', mobileNo: '1' },
      { id: 5, name: 'merc', feeds: [], displayName: 'Merc5', mobileNo: '1' },
    ];

    service.getAllMerchants().subscribe((res: Merchant[]) => {
      expect(res.length).toEqual(5);
    });

    const allMerchants = httpMock.expectOne(url.prefix + url.allMerchants);
    allMerchants.flush(merchants);
    httpMock.verify();
  }));

  it('should return all stores', inject([SearchingService], (service: SearchingService) => {
    const stores: Store[] = [
      { id: 1, name: 'store1', feeds: [], postalCode: 'X' },
      { id: 2, name: 'store2', feeds: [], postalCode: 'X' },
      { id: 3, name: 'store3', feeds: [], postalCode: 'X' },
      { id: 4, name: 'store4', feeds: [], postalCode: 'X' },
      { id: 5, name: 'store5', feeds: [], postalCode: 'X' },
    ];

    service.getAllStores().subscribe((res: Store[]) => {
      expect(res.length).toEqual(5);
    });

    const allStores = httpMock.expectOne(url.prefix + url.allStores);
    allStores.flush(stores);
    httpMock.verify();
  }));

  it('should return all categories', inject([SearchingService], (service: SearchingService) => {
    const categories: Category[] = [
      { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }
    ];

    service.getAllCategories().subscribe((res: Category[]) => {
      expect(res.length).toEqual(5);
    });

    const allCategories = httpMock.expectOne(url.prefix + url.allCategories);
    allCategories.flush(categories);
    httpMock.verify();
  }));

  it('should return products of specified merchant', inject([SearchingService], (service: SearchingService) => {
    const merchant: Merchant = {
      displayName: 'merc',
      id: 1,
      mobileNo: 'X',
      name: 'Merchant',
      products: [
        {id: 2, name: 'Product 1', rank: 0},
        {id: 3, name: 'Product 2', rank: 0},
        {id: 4, name: 'Product 3', rank: 0}
      ],
      stores: [
        {id: 5, name: 'Store 1', feeds: [], postalCode: 'X'},
        {id: 6, name: 'Store 2', feeds: [], postalCode: 'X'}
      ]
    };

    service.getMerchantProducts('merc').subscribe((res: any[]) => {
      expect(res.length).toEqual(3);
      expect(res[0]).toBe(jasmine.arrayContaining([]));
      expect(res[0].length).toEqual(3);
      expect(res[1]).toEqual('Merchant');
      expect(res[2]).toBe(jasmine.arrayContaining([]));
      expect(res[2].length).toEqual(2);
    });

    const merchantProducts = httpMock.expectOne(url.prefix + url.merchantByName + 'merc');
    merchantProducts.flush(merchant);
    httpMock.verify();
  }));
});
