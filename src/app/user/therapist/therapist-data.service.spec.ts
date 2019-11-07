import { TestBed } from '@angular/core/testing';

import { TherapistDataService } from './therapist-data.service';

describe('TherapistDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TherapistDataService = TestBed.get(TherapistDataService);
    expect(service).toBeTruthy();
  });
});
