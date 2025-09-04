import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { AddidCardComponent } from './addid-card.component';

describe('AddidCardComponent', () => {
  let component: AddidCardComponent;
  let fixture: ComponentFixture<AddidCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddidCardComponent ],
       imports: [HttpClientTestingModule],
         providers: [
        {
          provide: ActivatedRoute,
          useValue: {
  snapshot: {
    paramMap: {
      get: (key: string) => 'mock-id'
    }
  }
}
            // other mocks like queryParams, data, etc. can be added here
          }
        
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddidCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
