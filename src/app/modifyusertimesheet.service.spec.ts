import { TestBed } from '@angular/core/testing';

import { ModifyusertimesheetService } from './modifyusertimesheet.service';

describe('ModifyusertimesheetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModifyusertimesheetService = TestBed.get(ModifyusertimesheetService);
    expect(service).toBeTruthy();
  });
});
