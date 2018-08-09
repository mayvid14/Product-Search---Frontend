import { PriceSortPipe } from './price-sort.pipe';
import { GetPriceService } from './get-price.service';

describe('StrikePipe', () => {
  it('create an instance', () => {
    const pipe = new PriceSortPipe(new GetPriceService());
    expect(pipe).toBeTruthy();
  });
});
