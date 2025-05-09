import { TestBed } from '@angular/core/testing';

import { PokapiService } from './pokapi.service';

describe('PokapiService', () => {
  let service: PokapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
