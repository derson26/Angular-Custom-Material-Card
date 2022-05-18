import { TestBed } from '@angular/core/testing';

import { ServicePlansService } from './service-plans.service';

describe('ServicePlansService', () => {
  let service: ServicePlansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePlansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
