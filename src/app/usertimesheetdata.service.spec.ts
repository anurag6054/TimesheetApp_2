import { TestBed } from '@angular/core/testing';

import { UsertimesheetdataService } from './usertimesheetdata.service';

describe('UsertimesheetdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsertimesheetdataService = TestBed.get(UsertimesheetdataService);
    expect(service).toBeTruthy();
  });
});
