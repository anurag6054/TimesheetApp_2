import { TestBed } from '@angular/core/testing';

import { PsamappingService } from './psamapping.service';

describe('PsamappingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PsamappingService = TestBed.get(PsamappingService);
    expect(service).toBeTruthy();
  });
});
