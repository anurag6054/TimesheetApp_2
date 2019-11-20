import { TestBed } from '@angular/core/testing';

import { AdmintimesheetdataService } from './admintimesheetdata.service';

describe('AdmintimesheetdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdmintimesheetdataService = TestBed.get(AdmintimesheetdataService);
    expect(service).toBeTruthy();
  });
});
