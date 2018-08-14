import { ShowAvailablePipe } from './show-available.pipe';
import { Product } from './product';

describe('ShowAvailablePipe', () => {
  it('create an instance', () => {
    const pipe = new ShowAvailablePipe();
    expect(pipe).toBeTruthy();
  });

  it('should show all Products if feeds are present', () => {
    const pipe = new ShowAvailablePipe();
    const products: Product[] = [
      { id: 1, name: 'Product 1', rank: 1, feeds: [{ id: 0, price: 1, quantity: 1 }] },
      { id: 2, name: 'Product 2', rank: 2, feeds: [{ id: 0, price: 1, quantity: 1 }] },
      { id: 3, name: 'Product 3', rank: 3, feeds: [{ id: 0, price: 1, quantity: 1 }] },
      { id: 4, name: 'Product 4', rank: 4, feeds: [{ id: 0, price: 1, quantity: 1 }] },
      { id: 5, name: 'Product 5', rank: 5, feeds: [{ id: 0, price: 1, quantity: 1 }] },
    ];
    const res = pipe.transform(products);
    expect(res.is.length).toEqual(5);
    expect(res.oos.length).toEqual(0);
  });

  it(`shouldn't show any Products if no feed is present`, () => {
    const pipe = new ShowAvailablePipe();
    const products: Product[] = [
      { id: 1, name: 'Product 1', rank: 1, feeds: [] },
      { id: 2, name: 'Product 2', rank: 2, feeds: [] },
      { id: 3, name: 'Product 3', rank: 3, feeds: [] },
      { id: 4, name: 'Product 4', rank: 4, feeds: [] },
      { id: 5, name: 'Product 5', rank: 5, feeds: [] },
    ];
    const res = pipe.transform(products);
    expect(res.is.length).toEqual(0);
    expect(res.oos.length).toEqual(5);
  });

  it('should only find products with feeds', () => {
    const pipe = new ShowAvailablePipe();
    const noOfProducts = Math.round(Math.random() * 10) + 1;
    const products: Product[] = [];
    let count = 0;
    for (let i = 0; i < noOfProducts; i++) {
      if (Math.random() < 0.5) {
        products.push({
          id: i, name: 'Product ' + i, rank: i, feeds: []
        });
      } else {
        products.push({
          id: i, name: 'Product ' + i, rank: i, feeds: [{ id: 0, price: 1, quantity: i }]
        });
        count += 1;
      }
    }
    const res = pipe.transform(products);
    expect(res.is.length).toEqual(count);
    expect(res.oos.length).toEqual(noOfProducts - count);
  });
});
