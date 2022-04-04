import { TestBed } from '@angular/core/testing';

import { GetFeatureService } from './get-feature.service';

describe('GetFeatureService', () => {
  let service: GetFeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
