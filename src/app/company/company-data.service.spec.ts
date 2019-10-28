import { TestBed } from '@angular/core/testing';

import { CompanyDataService } from './company-data.service';

describe('CompanyDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanyDataService = TestBed.get(CompanyDataService);
    expect(service).toBeTruthy();
  });
});
