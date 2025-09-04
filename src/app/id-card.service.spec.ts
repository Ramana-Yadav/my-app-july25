import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 

import { IdCardService } from './id-card.service';

describe('IdCardService', () => {
  let service: IdCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(IdCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
