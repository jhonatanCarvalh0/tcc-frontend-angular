import { TestBed } from '@angular/core/testing';

import { BensMoveisService } from './bens-moveis.service';

describe('BensMoveisService', () => {
  let service: BensMoveisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BensMoveisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
