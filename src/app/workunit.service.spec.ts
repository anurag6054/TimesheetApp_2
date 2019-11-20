import { TestBed } from '@angular/core/testing';

import { WorkunitService } from './workunit.service';

describe('WorkunitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkunitService = TestBed.get(WorkunitService);
    expect(service).toBeTruthy();
  });
});
