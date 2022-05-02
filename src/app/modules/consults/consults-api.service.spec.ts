import { TestBed } from '@angular/core/testing';

import { ConsultsApiService } from './consults-api.service';

describe('ConsultsApiService', () => {
  let service: ConsultsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
