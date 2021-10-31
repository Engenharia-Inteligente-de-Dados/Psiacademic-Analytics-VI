import { TestBed } from '@angular/core/testing';

import { ChartsManageService } from './charts-manage.service';

describe('ChartsManageService', () => {
  let service: ChartsManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartsManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
