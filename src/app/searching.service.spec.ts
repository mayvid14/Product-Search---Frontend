import { TestBed, inject } from '@angular/core/testing';

import { SearchingService } from './searching.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SearchingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchingService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([SearchingService], (service: SearchingService) => {
    expect(service).toBeTruthy();
  }));
});
