import { TestBed } from '@angular/core/testing';

import { NormalUserDataService } from './normal-user-data.service';

describe('NormalUserDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NormalUserDataService = TestBed.get(NormalUserDataService);
    expect(service).toBeTruthy();
  });
});
