import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { WeatherreportService } from './weatherreport.service';

describe('WeatherreportService', () => {
  let service: WeatherreportService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(WeatherreportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
