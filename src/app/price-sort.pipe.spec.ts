import { PriceSortPipe } from './price-sort.pipe';
import { GetPriceService } from './get-price.service';
import { Product } from './product';
import { Store } from './store';

describe('PriceSortPipe', () => {
  it('create an instance', () => {
    const pipe = new PriceSortPipe(new GetPriceService());
    expect(pipe).toBeTruthy();
  });

  // it('should sort in ascending order', () => {
  //   const service = new GetPriceService();
  //   const pipe = new PriceSortPipe(service);
  //   spyOn(service, 'salePriceAndPriceInStore').and.callFake((store: Store[], product: Product) => {
  //     return product.id;
  //   });
  //   const products: Product[] = [
  //     { id: 5, name: 'Product 5', rank: 1 },
  //     { id: 2, name: 'Product 2', rank: 1 },
  //     { id: 4, name: 'Product 4', rank: 1 },
  //     { id: 1, name: 'Product 1', rank: 1 },
  //     { id: 3, name: 'Product 3', rank: 1 },
  //   ];
  //   const sorted: Product[] = products.sort((a, b) => {
  //     if (a.id < b.id) {
  //       return -1;
  //     } else if (a.id > b.id) {
  //       return 1;
  //     } else {
  //       return 0;
  //     }
  //   });
  //   expect(pipe.transform(products, [], true)).toBe(sorted);
  // });

  // it('should sort in descending order', () => {
  //   const service = new GetPriceService();
  //   const pipe = new PriceSortPipe(service);
  //   spyOn(service, 'salePriceAndPriceInStore').and.callFake((store: Store[], product: Product) => {
  //     return product.id;
  //   });
  //   const products: Product[] = [
  //     { id: 5, name: 'Product 5', rank: 1 },
  //     { id: 2, name: 'Product 2', rank: 1 },
  //     { id: 4, name: 'Product 4', rank: 1 },
  //     { id: 1, name: 'Product 1', rank: 1 },
  //     { id: 3, name: 'Product 3', rank: 1 },
  //   ];
  //   const sorted: Product[] = products.sort((a, b) => {
  //     if (a.id < b.id) {
  //       return -1;
  //     } else if (a.id > b.id) {
  //       return 1;
  //     } else {
  //       return 0;
  //     }
  //   });
  //   expect(pipe.transform(products, [], false)).toBe(sorted.reverse());
  // });
});
