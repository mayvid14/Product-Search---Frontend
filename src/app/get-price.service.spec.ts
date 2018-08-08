import { TestBed, inject } from '@angular/core/testing';

import { GetPriceService } from './get-price.service';

describe('GetPriceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPriceService]
    });
  });

  it('should be created', inject([GetPriceService], (service: GetPriceService) => {
    expect(service).toBeTruthy();
  }));
});
