import { TestBed, inject } from '@angular/core/testing';

import { RequestCacheService } from './request-cache.service';
import { HttpResponse } from '@angular/common/http';

describe('RequestCacheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestCacheService]
    });
  });

  it('should be created', inject([RequestCacheService], (service: RequestCacheService) => {
    expect(service).toBeTruthy();
  }));

  it('should set keys', inject([RequestCacheService], (service: RequestCacheService) => {
    service.set('Key', 'Value', 1000);
    const res = service.get('Key');
    expect(res).toBeDefined();
  }));

  it('should return null on invalid key', inject([RequestCacheService], (service: RequestCacheService) => {
    expect(service.get(null)).toBeNull();
  }));

  it('should return null on expired ttl', inject([RequestCacheService], (service: RequestCacheService) => {
    service.set('Key', 'Value', 0.001);
    const res = service.get('Key');
    expect(res).toBeNull();
  }));

  it('should return a string', inject([RequestCacheService], (service: RequestCacheService) => {
    service.set('Key', 'Value', 1000);
    const res = service.get('Key');
    expect(typeof res).toEqual('string');
  }));
});
