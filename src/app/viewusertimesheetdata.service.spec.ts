import { TestBed } from '@angular/core/testing';

import { ViewusertimesheetdataService } from './viewusertimesheetdata.service';

describe('ViewusertimesheetdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewusertimesheetdataService = TestBed.get(ViewusertimesheetdataService);
    expect(service).toBeTruthy();
  });
});
