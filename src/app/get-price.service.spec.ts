import { TestBed, inject } from '@angular/core/testing';

import { GetPriceService } from './get-price.service';
import { Store } from './store';
import { Product } from 'src/app/product';

describe('GetPriceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPriceService]
    });
  });

  it('should be created', inject([GetPriceService], (service: GetPriceService) => {
    expect(service).toBeTruthy();
  }));

  it('should return correct salePrice and price', inject([GetPriceService], (service: GetPriceService) => {
    const stores: Store[] = [
      {
        id: 0, name: 'Store', postalCode: 'X', feeds: [{ id: 0, price: 12, quantity: 1, salePrice: 11 }]
      },
      {
        id: 0, name: 'Store', postalCode: 'X', feeds: [{ id: 1, price: 13, quantity: 1, salePrice: 13 }]
      },
      {
        id: 0, name: 'Store', postalCode: 'X', feeds: [{ id: 2, price: 14, quantity: 1, salePrice: 10 }]
      }
    ];
    const product: Product = {
      id: 0,
      name: 'Product',
      rank: 0,
      feeds: [{ id: 2, price: 14, quantity: 1, salePrice: 10 }, { id: 0, price: 12, quantity: 1, salePrice: 11 }]
    };
    const res = service.salePriceAndPriceInStore(stores, product);
    expect(res.price).toEqual(12);
    expect(res.salePrice).toEqual(10);
  }));

  it('should return infinite if feeds is empty', inject([GetPriceService], (service: GetPriceService) => {
    const stores: Store[] = [
      {
        id: 0, name: 'Store', postalCode: 'X', feeds: [{ id: 0, price: 12, quantity: 1, salePrice: 11 }]
      },
      {
        id: 0, name: 'Store', postalCode: 'X', feeds: [{ id: 1, price: 13, quantity: 1, salePrice: 13 }]
      },
      {
        id: 0, name: 'Store', postalCode: 'X', feeds: [{ id: 2, price: 14, quantity: 1, salePrice: 10 }]
      }
    ];
    const product: Product = {
      id: 0,
      name: 'Product',
      rank: 0,
      feeds: []
    };
    const res = service.salePriceAndPriceInStore(stores, product);
    expect(res.price).toEqual(Number.POSITIVE_INFINITY);
    expect(res.salePrice).toEqual(Number.POSITIVE_INFINITY);
  }));
});
