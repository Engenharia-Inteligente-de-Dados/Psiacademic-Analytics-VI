import { TestBed } from '@angular/core/testing';

import { SearchAPI } from './search-api.service';

describe('ShearchService', () => {
  let service: SearchAPI;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchAPI);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
