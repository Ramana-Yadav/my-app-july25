import { TestBed } from '@angular/core/testing';

import { CommonsiblingService } from './commonsibling.service';

describe('CommonsiblingService', () => {
  let service: CommonsiblingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonsiblingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
