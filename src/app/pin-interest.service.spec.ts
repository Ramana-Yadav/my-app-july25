import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 

import { PinInterestService } from './pin-interest.service';

describe('PinInterestService', () => {
  let service: PinInterestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PinInterestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
