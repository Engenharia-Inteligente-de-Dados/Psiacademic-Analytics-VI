import { TestBed } from '@angular/core/testing';

import { BaseHttpProvider } from './base-http.provider';

describe('BaseHttp.ProviderService', () => {
  let service: BaseHttpProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseHttpProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
