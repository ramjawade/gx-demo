import { TestBed } from '@angular/core/testing';

import { CoreServiceService } from './core-service.service';

describe('CoreServiceService', () => {
  let service: CoreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
