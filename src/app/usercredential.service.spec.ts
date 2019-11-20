import { TestBed } from '@angular/core/testing';

import { UsercredentialService } from './usercredential.service';

describe('UsercredentialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsercredentialService = TestBed.get(UsercredentialService);
    expect(service).toBeTruthy();
  });
});
