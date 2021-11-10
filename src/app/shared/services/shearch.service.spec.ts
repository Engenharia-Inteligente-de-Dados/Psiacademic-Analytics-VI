import { TestBed } from '@angular/core/testing';

import { ShearchService } from './shearch.service';

describe('ShearchService', () => {
  let service: ShearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
