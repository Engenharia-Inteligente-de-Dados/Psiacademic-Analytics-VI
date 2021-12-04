import { TestBed } from '@angular/core/testing';

import { AnalyticsAPIService } from './analytics-api.service';

describe('AnalyticsAPIService', () => {
  let service: AnalyticsAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalyticsAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
